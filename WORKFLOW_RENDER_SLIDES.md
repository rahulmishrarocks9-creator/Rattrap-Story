#!/bin/bash
# GitHub Actions Render Workflow Setup
# This script sets up the automatic slide rendering on every commit

name: Render Slides to 4K Images

on:
  push:
    branches:
      - main
    paths:
      - 'artifacts/rattrap-ppt/src/pages/slides/**'
      - 'scripts/render-slides.js'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  render-slides:
    runs-on: ubuntu-latest
    timeout-minutes: 30

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        working-directory: artifacts/rattrap-ppt
        run: npm install

      - name: Install Puppeteer
        run: npm install --save-dev puppeteer

      - name: Start dev server
        working-directory: artifacts/rattrap-ppt
        run: |
          npm run dev > /tmp/dev-server.log 2>&1 &
          echo $! > /tmp/dev-server.pid
          sleep 10

      - name: Wait for server
        run: |
          for i in {1..30}; do
            if curl -s http://localhost:5173 > /dev/null; then
              echo "✅ Server ready"
              exit 0
            fi
            echo "Waiting... ($i/30)"
            sleep 2
          done
          exit 1

      - name: Render slides
        run: node scripts/render-slides.js

      - name: Stop dev server
        if: always()
        run: kill $(cat /tmp/dev-server.pid) 2>/dev/null || true

      - name: Commit images
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add slide-outputs/
          git commit -m "🎬 Auto-render slides to 4K" || true
          git push || true

      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: rendered-slides-4k
          path: slide-outputs/
          retention-days: 30
