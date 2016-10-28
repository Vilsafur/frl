//////////////////////////////
// \file test/main.js
// \author Cyril POIDEVIN
// \version 0.0.1
//
// Main file
//
//////////////////////////////

function frl(path, callback) {
  return process.nextTick(function() {callback('The path was not specified');})
}

module.exports = frl;
