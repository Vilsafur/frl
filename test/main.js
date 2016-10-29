/*
 * \file test/main.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 * 
 * Main file for test
 * 
 */
 
var should = require('should');
var rewire = require('rewire');
var frl = rewire('../lib/main');
 
/*
 * Add test for 'frl' function
 */
describe('frl', function(){
  describe('with no argument', function() {
    it('returns console log to inform path not specified', function(done) {
      var result = frl('', function(result) {
        result.should.eql('The path was not specified');
        done();
      });
    });
  });
  describe('with a path', function() {
    describe('invalid', function() {
      it('return console log to inform path is invalid', function(done) {
        var result = frl('Hello', function(result) {
          result.should.eql('The given path do not exist');
          done();
        });
      });
    });
  });
});

/*
 * Add tests for 'getFiles' function
 */
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
         var result = getFiles('Hello', function(result) {
           result.should.eql('The given path do not exist');
           done();
         });
       });
    });
    describe('valid', function() {
      it('return an array with list of file', function(done) {
        var result = getFiles('test', function(path, result) {
          console.log(result);
          result.should.eql(['main.js']);
          done();
        })
      });
    });
  });
});
