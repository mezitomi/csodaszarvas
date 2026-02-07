#!/bin/bash

# CsodaSzarvas Deployment Script
# This script deploys the Docker image to the VPS using Docker Compose

set -e  # Exit on any error

echo "🚀 Starting deployment of CsodaSzarvas..."

# Configuration (can be overridden by environment variables)
APP_DIR="${APP_DIR:-$HOME/apps/csodaszarvas}"
IMAGE_NAME="${IMAGE_NAME:-csodaszarvas:latest}"
IMAGE_FILE="${IMAGE_FILE:-csodaszarvas-latest.tar}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.production.yml}"

# Change to app directory
cd "$APP_DIR"

# Check if image file exists
if [ ! -f "$IMAGE_FILE" ]; then
    echo "❌ Error: Image file $IMAGE_FILE not found!"
    echo "Please upload the Docker image first."
    exit 1
fi

# Check if compose file exists
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "❌ Error: $COMPOSE_FILE not found!"
    echo "Please upload $COMPOSE_FILE first."
    exit 1
fi

echo "📦 Loading Docker image from $IMAGE_FILE..."
docker load -i "$IMAGE_FILE"

echo "🛑 Stopping existing containers..."
docker compose -f "$COMPOSE_FILE" down 2>/dev/null || true

echo "🚀 Starting containers with Docker Compose..."
docker compose -f "$COMPOSE_FILE" up -d

# Wait a few seconds for container to start
sleep 3

# Check if container is running
if docker compose -f "$COMPOSE_FILE" ps | grep -q "Up"; then
    echo "✅ Containers started successfully!"
    
    # Show container logs (last 20 lines)
    echo ""
    echo "📋 Recent logs:"
    docker compose -f "$COMPOSE_FILE" logs --tail=20
    
    echo ""
    echo "🎉 Deployment complete!"
    echo "Application is running at http://localhost:3000"
    echo ""
    echo "Useful commands:"
    echo "  View logs:     docker compose -f $COMPOSE_FILE logs -f"
    echo "  Stop app:      docker compose -f $COMPOSE_FILE down"
    echo "  Restart app:   docker compose -f $COMPOSE_FILE restart"
    echo "  View status:   docker compose -f $COMPOSE_FILE ps"
else
    echo "❌ Container failed to start!"
    echo "Check logs with: docker compose -f $COMPOSE_FILE logs"
    exit 1
fi

echo ""
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

# Clean up the tar file to save space
echo "🗑️  Removing image tar file..."
rm -f "$IMAGE_FILE"

echo "✨ Deployment script completed!"
