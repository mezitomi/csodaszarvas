#!/bin/bash

# CsodaSzarvas Deployment Script
# This script deploys the Docker image to the VPS using Docker Compose

set -e  # Exit on any error

echo "🚀 Starting deployment of CsodaSzarvas..."

# Configuration
APP_DIR="$HOME/apps/csodaszarvas"
IMAGE_NAME="csodaszarvas:latest"
IMAGE_FILE="csodaszarvas-latest.tar"

# Change to app directory
cd "$APP_DIR"

# Check if image file exists
if [ ! -f "$IMAGE_FILE" ]; then
    echo "❌ Error: Image file $IMAGE_FILE not found!"
    echo "Please upload the Docker image first."
    exit 1
fi

# Check if docker-compose.yml exists
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ Error: docker-compose.yml not found!"
    echo "Please upload docker-compose.yml first."
    exit 1
fi

echo "📦 Loading Docker image from $IMAGE_FILE..."
docker load -i "$IMAGE_FILE"

echo "🛑 Stopping existing containers..."
docker compose down 2>/dev/null || true

echo "🚀 Starting containers with Docker Compose..."
docker compose up -d

# Wait a few seconds for container to start
sleep 3

# Check if container is running
if docker compose ps | grep -q "Up"; then
    echo "✅ Containers started successfully!"
    
    # Show container logs (last 20 lines)
    echo ""
    echo "📋 Recent logs:"
    docker compose logs --tail=20
    
    echo ""
    echo "🎉 Deployment complete!"
    echo "Application is running at http://localhost:3000"
    echo ""
    echo "Useful commands:"
    echo "  View logs:     docker compose logs -f"
    echo "  Stop app:      docker compose down"
    echo "  Restart app:   docker compose restart"
    echo "  View status:   docker compose ps"
else
    echo "❌ Container failed to start!"
    echo "Check logs with: docker compose logs"
    exit 1
fi

echo ""
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

# Clean up the tar file to save space
echo "🗑️  Removing image tar file..."
rm -f "$IMAGE_FILE"

echo "✨ Deployment script completed!"
