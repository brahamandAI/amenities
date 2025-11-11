#!/bin/bash
set -e

echo "🚀 Starting deployment process..."
npm install
npm run build
pm2 restart ecosystem.config.js