#!/bin/bash

# Set permissions and environment
chmod +x node_modules/.bin/react-scripts 2>/dev/null || true
export CI=false
export GENERATE_SOURCEMAP=false
export SKIP_PREFLIGHT_CHECK=true

echo "🚀 Starting AirFel build..."

# Try different approaches to run react-scripts
if [ -x "node_modules/.bin/react-scripts" ]; then
    echo "✅ Using direct react-scripts..."
    node_modules/.bin/react-scripts build
elif [ -f "node_modules/react-scripts/bin/react-scripts.js" ]; then
    echo "✅ Using node to run react-scripts..."
    node node_modules/react-scripts/bin/react-scripts.js build
else
    echo "✅ Using npx fallback..."
    npx react-scripts build
fi

BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo "✅ AirFel build completed successfully!"
else
    echo "❌ Build failed with exit code $BUILD_EXIT_CODE"
    exit $BUILD_EXIT_CODE
fi