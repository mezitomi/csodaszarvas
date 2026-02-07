# Stage 1: Build the application
FROM node:22-alpine AS builder

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (native modules will be built for Alpine/musl)
RUN pnpm install --frozen-lockfile

# Copy application files
COPY . .

# Set dummy environment variables for build
# (Real values will be provided at runtime)
ENV NODE_ENV=production \
    TURSO_DATABASE_URL=placeholder \
    TURSO_AUTH_TOKEN=placeholder \
    BETTER_AUTH_SECRET=placeholder \
    BETTER_AUTH_URL=placeholder \
    GOOGLE_CLIENT_ID=placeholder \
    GOOGLE_CLIENT_SECRET=placeholder \
    SENTRY_AUTH_TOKEN=placeholder \
    SENTRY_DSN=placeholder

# Build the Nuxt application
RUN pnpm run build

# Stage 2: Production runtime
FROM node:22-alpine AS production

# Set working directory
WORKDIR /app

# Copy only the built output from builder
COPY --from=builder /app/.output ./.output

# Copy native libsql modules that Nuxt bundles but doesn't include the binaries
COPY --from=builder /app/node_modules/@libsql/linux-x64-musl ./.output/server/node_modules/@libsql/linux-x64-musl

# Create non-root user (Alpine commands)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S -u 1001 -G nodejs nuxt && \
    chown -R nuxt:nodejs /app

# Switch to non-root user
USER nuxt

# Expose port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# # Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["node", ".output/server/index.mjs"]

# docker build -t csodaszarvas:latest .
# docker run -p 3000:3000 --env-file .env csodaszarvas:latestmjs"]
