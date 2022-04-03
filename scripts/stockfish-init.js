const fs = require('fs')

const errorHandler = (err) => {
  if (err) {
    console.error('Failed to copy over stockfish.js files');
    throw err;
  }
};

const oldBase = 'node_modules/stockfish.js'
const newBase = 'public/stockfish.js'

if (!fs.existsSync(newBase)){
  fs.mkdirSync(newBase);
}

fs.copyFile(oldBase + '/stockfish.js', newBase + '/stockfish.js', errorHandler);
fs.copyFile(oldBase + '/stockfish.wasm.js', newBase + '/stockfish.wasm.js', errorHandler);
fs.copyFile(oldBase + '/stockfish.wasm', newBase + '/stockfish.wasm', errorHandler);