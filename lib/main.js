//////////////////////////////
// \file test/main.js
// \author Cyril POIDEVIN
// \version 0.0.1
//
// Main file
//
//////////////////////////////

var m_fs = require('fs');

function frl(path, callback) {
  if(!path || path.lenght == 0) {
    return process.nextTick(function() {callback('The path was not specified');})
  }
  m_fs.stat(path, function(err, stats) {
    if(err) {
      return process.nextTick(function() {callback('The given path do not exist');});
    }
  });
}

module.exports = frl;
