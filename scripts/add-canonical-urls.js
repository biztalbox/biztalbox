/**
 * Script to identify pages and layouts that need canonical URLs
 * 
 * Usage:
 * node scripts/add-canonical-urls.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to scan
const APP_DIR = path.join(__dirname, '../src/app');

// Regex patterns
const METADATA_PATTERN = /export\s+const\s+metadata\s*:?\s*Metadata\s*=/;
const CREATE_METADATA_PATTERN = /createMetadata\(/;

// Results storage
const needsCanonical = [];
const alreadyHasCanonical = [];

/**
 * Process a file to check if it has metadata but not createMetadata
 */
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has metadata
    if (METADATA_PATTERN.test(content)) {
      // Check if file already uses createMetadata
      if (CREATE_METADATA_PATTERN.test(content)) {
        alreadyHasCanonical.push(filePath);
      } else {
        needsCanonical.push(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

/**
 * Recursively scan a directory for TS/TSX files
 */
function scanDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      scanDirectory(filePath);
    } else if (stats.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
      processFile(filePath);
    }
  });
}

// Main execution
console.log('Scanning for files that need canonical URLs...');
scanDirectory(APP_DIR);

console.log('\n=== Files that need canonical URLs ===');
needsCanonical.forEach(file => {
  const relativePath = path.relative(path.join(__dirname, '..'), file);
  console.log(relativePath);
});

console.log(`\nTotal: ${needsCanonical.length} files need canonical URLs`);
console.log(`${alreadyHasCanonical.length} files already have canonical URLs`);

// Suggest command to run to update them
console.log('\nTo update a file with canonical URLs, use:');
console.log('1. Import the createMetadata function:');
console.log('   import { createMetadata } from "@/utils/metadata";');
console.log('2. Change the metadata export:');
console.log('   const baseMetadata: Metadata = { ... };');
console.log('   export const metadata = createMetadata(baseMetadata, \'/your-path\');'); 