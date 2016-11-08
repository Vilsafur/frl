/*
 * \file test/readVideo.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 *
 * Test for 'readVideo' function
 *
 */

var should = require('should');
var rewire = require('rewire');
var frl = rewire('../lib/main');
var readVideo = frl.__get__('readVideo');

describe('readFiles', function() {
  describe('missing argument', function() {
    describe('files', function() {
      it('return console log to inform no files was specified', function(done) {
        var result = readVideo([], 'test', function(result) {
          result.should.eql('No files specified');
          done();
        });
      });
    });
    describe('path', function() {
      it('return console log to inform path is needed', function(done) {
        var result = readVideo(['blabla'], '', function(result) {
          result.should.eql('No path specified');
          done();
        });
      });
    });
  });
  describe('with arguments', function() {
    it('launches an instance of OMX Player');
  });
});
