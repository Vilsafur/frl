/*
 * \file test/main.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 * 
 * Main file
 * 
 */

var m_fs = require('fs');

/*
 * \fn frl
 *
 * Main function
 *
 * \param path The path of directory
 * \param callback The callback
 */
function frl(path, callback) {
  if(!path || path.lenght === 0) {
    return process.nextTick(function() {callback('The path was not specified');})
  }
  m_fs.stat(path, function(err, stats) {
    if(err) {
      return process.nextTick(function() {callback('The given path do not exist');});
    }
  });
}

/*
 * \fn getFiles
 *
 * Return the file's list of the given directory
 *
 * \param path The path of the directory
 * \param callback The callback
 */
function getFiles(path, callback) {
  if(!path || path.lenght === 0) {
    return process.nextTick(function() {callback('The path was not specified');});
  }
  m_fs.readdir(path, function(err, allFiles) {
    if(err) {
      return process.nextTick(function() {callback('The given path do not exist');});
    }
    files = [];
    for (file in allFiles) {
      if(m_fs.statSync(path + '/' + allFiles[file]).isFile()) {
        files.push(allFiles[file]);
      }
    }
    callback(files, path);
  });
}

/*
 * \fn readFiles
 *
 * Launches relative function to the given files
 *
 * \param files The given files
 * \param path The man path of the given files
 * \param callback The callback
 */
function readFiles(files, path, callback) {
  if(files.length === 0) {
    return process.nextTick(function() {callback('No files specified');});
  }
  if(path.length === 0) {
    return process.nextTick(function() {callback('No path specified');});
  }
}

module.exports = frl;
