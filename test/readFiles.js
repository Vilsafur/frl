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

describe('readFiles', function() {
  var readFiles = frl.__get__('readFiles');
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
    describe('valid', function() {
      it('launches the right function based on files');
    });
  });
});
