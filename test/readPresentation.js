/*
 * \file test/readPresentation.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 *
 * Test for 'readPresentation' function
 *
 */

var should = require('should');
var rewire = require('rewire');
var frl = rewire('../lib/main');
var readPresentation = frl.__get__('readPresentation');

describe('readPresentation', function() {
  describe('missing argument', function() {
    describe('files', function() {
      it('return console log to inform no files was specified', function(done) {
        var result = readPresentation('', function(result) {
          result.should.eql('No files specified');
          done();
        });
      });
    });
  });
  describe('with arguments', function() {
    it('launches an instance of Impressive');
  });
});
