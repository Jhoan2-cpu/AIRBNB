#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Set environment variables for the build
process.env.CI = 'false';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.SKIP_PREFLIGHT_CHECK = 'true';

console.log('Starting AirFel build process...');

// Try to run react-scripts build with proper permissions
const buildScript = path.join(__dirname, 'node_modules', '.bin', 'react-scripts');

const buildProcess = spawn('node', [buildScript, 'build'], {
  stdio: 'inherit',
  env: { ...process.env },
  cwd: __dirname
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ AirFel build completed successfully!');
    process.exit(0);
  } else {
    console.error(`❌ Build failed with exit code ${code}`);
    process.exit(code);
  }
});

buildProcess.on('error', (error) => {
  console.error('❌ Build process error:', error);
  process.exit(1);
});