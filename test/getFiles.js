/*
 * \file getFiles.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 *
 * Test file for getFiles function
 *
 */

var should = require('should');
var rewire = require('rewire');
var frl = rewire('../lib/main');

describe('getFiles', function() {
  describe('with no argument', function() {
    var getFiles = frl.__get__('getFiles');
    it('return console log to inform path was not specified', function(done) {
      var result = getFiles('', function(result) {
        result.should.eql('The path was not specified');
        done();
      });
    });
  });
  describe('with a path', function() {
    var getFiles = frl.__get__('getFiles');
    describe('invalid', function() {
      it('return console log to inform path is invalid', function(done) {
         var result = getFiles('./hello', function(result) {
           result.should.eql('The given path do not exist');
           done();
         });
       });
    });
    describe('valid', function() {
      it('return an array with list of file', function(done) {
        var result = getFiles('test', function(result, path) {
          result.should.be.instanceOf(Array);
          done();
        })
      });
    });
  });
});

