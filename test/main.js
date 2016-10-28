 /////////////////////////
 // \file test/main.js
 // \author Cyril POIDEVIN
 // \version 0.0.1
 //
 // Main file for test
 //
 // //////////////////////
 
 var should = require('should');
 var frl = require('../lib/main');
 
 describe('frl', function(){
   describe('with no argument', function() {
     it('returns console log to inform path not found', function(done) {
       var result = frl('', function(result) {
         result.should.eql('The path was not specified');
         done();
       });
     });
   });
 });
 
