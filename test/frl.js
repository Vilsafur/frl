/*
 * \file test/frl.js
 * \author Cyril POIDEVIN
 * \version 0.0.1
 * 
 * Test for the main function
 * 
 */
 
var should = require('should');
var frl = require('../lib/main');
 
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


