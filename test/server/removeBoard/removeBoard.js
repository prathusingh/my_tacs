'use strict';

var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),     
    request = require('supertest');




describe('POST /api/removeboard', function() {





  
  it('should not delete the board', function(done) {
    var body={"_id" : "536c7e4a40ba5dbd3af3def2","link":"http://en.wikipedia.org/wiki/Animal","board":"Animal"};
    request(app)
      .post('/api/removeboard')
      .send(body)
      .expect(500)
       .expect('Content-Type',"text/html")
      .end(function(err, res) {
        if (err) return done(err);
        //res.body.should.be.instanceof(Array);
        done();
      });
  });
});  

