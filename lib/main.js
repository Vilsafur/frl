/*
 * \file test/main.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 * 
 * Main file
 * 
 */

var m_fs = require('fs');
var m_path = require('path');
var m_chokidar = require('chokidar');
var m_omx = require('omxdirector');
var m_childProcess = require('child_process');
var m_config = require('./config.json');

var watcher = false;
var presentationProcess = 0;

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

  getFiles(path, readFiles);
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
  if(typeof path === 'undefined' || path.length === 0) {
    return process.nextTick(function() {callback('No path specified');});
  }

  if(!watcher) {
    watcher = m_chokidar.watch(path, {
      interval: 100,
      usePolling: true
    });
  }

  if(m_config.fileType.video.indexOf(m_path.extname(files[0])) > -1) {
    watcher.on('add, change', function(path, stats) {
      getFiles(m_path.basename(path), readFiles);
    });
    readVideo(files, path);
    if(typeof callback === 'function') {
      return process.nextTick(function() {callback('Read video files');});
    }
  }
  else {
    for (file in files) {
      if(m_config.fileType.presentation.indexOf(m_path.extname(files[file])) > -1) {
        watcher.on('change', function(path, stats) {
          readPresentation(path);
        });
        readPresentation(path + '/' + files[file]);
        if(typeof callback === 'function') {
          return process.nextTick(function() {callback('Read presentation file');});
        }
      }
    }
  }
}

/*
 * \fn readVideo
 *
 * Read multiple video winth OMX Player
 *
 * \param files The given files
 * \param path The main path of th given path
 * \param callback The callback
 */
function readVideo(files, path, callback) {
  if(files.length === 0) {
    return process.nextTick(function() {callback('No files specified');});
  }
  if(path.length === 0) {
    return process.nextTick(function() {callback('No path specified');});
  }
  
  if(!m_omx.isPlaying()) {
    m_omx.stop();
  }
  m_omx.setVideoDir(path);
  m_omx.play(files, {loop: true});

}

/*
 * \fn readPresentation
 *
 * Read single pdf with impressive
 *
 * \param file The given file
 * \param callback The callback
 */
function readPresentation(file, callback) {
  if(file.length === 0) {
    return process.nextTick(function() {callback('No files specified');});
  }

  if(presentationProcess !== 0) {
    presentationProcess.kill();
  }
  presentationProcess = m_childProcess.exec('impressive -a 10 -w "' + file + '"');
}

module.exports = frl;
