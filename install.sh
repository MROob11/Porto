#!/bin/bash

# Simple script to retry npm install with different strategies

echo "🔄 Attempting npm install with retry mechanism..."
echo ""

# Strategy 1: Clean cache and retry
echo "Strategy 1: Cleaning npm cache..."
npm cache clean --force
npm install --prefer-offline --no-audit --legacy-peer-deps

# If above fails, try this:
# npm install --registry=https://registry.npmmirror.com/
