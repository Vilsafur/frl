/*
 * \file test/readFiles.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 *
 * Test for 'readFiles' function
 *
 */

var should = require('should');
var rewire = require('rewire');
var frl = rewire('../lib/main');
var readFiles = frl.__get__('readFiles');

describe('readFiles', function() {
  describe('missing argument', function() {
    describe('files', function() {
      it('return console log to inform no files was specified', function(done) {
        var result = readFiles([], 'test', function(result) {
          result.should.eql('No files specified');
          done();
        });
      });
    });
    describe('path', function() {
      it('return console log to inform path is needed', function(done) {
        var result = readFiles(['blabla'], '', function(result) {
          result.should.eql('No path specified');
          done();
        });
      });
    });
  });
  describe('with arguments', function() {
    describe('launches the right function based on files', function() {
      it('launches the function to read Video', function() {
        var result = readFiles(['SampleVideo_1280x720_1mb.mp4'], 'test/testFiles', function(result) {
          result.should.eql('Read video files');
          done();
        });
      });
      it('launches the function to read Presentation', function() {
        var result = readFiles('test/testFiles/SamplePDF.pdf', function(result) {
          result.should.eql('Read presentation file');
          done();
        });
      });
    });
  });
});
