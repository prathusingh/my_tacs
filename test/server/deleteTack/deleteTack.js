'use strict';

var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),     
    request = require('supertest');




describe('POST /api/deletetack', function() {
  
  it('should not delete the tack', function(done) {
   var body={"link":"http://www.google.com"};
   //var user={}
   //var login=require('../../lib/controllers/session');
  // login.login()
    request(app)
      .post('/api/deletetack')
      .send(body)
      .expect(500)
       .expect('Content-Type', "text/html")
      .end(function(err, res) {
        if (err) return done(err);
        //res.body.should.be.instanceof(Array);
        done();
      });
  });
});




