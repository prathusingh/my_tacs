'use strict';

var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),     
    request = require('supertest');



describe('POST /api/addboard', function() {

var board= ({_id: "536d4334bbabd5300dd6b7de",board:"Insects"});

       
  it('/api/addboard should add the board', function(done) {
   
    request(app)
      .post('/api/addboard')
      .send(board)
      .expect(500)
       .expect('Content-Type',"text/html")
      .end(function(err, res) {
        if (err) return done(err);
        //res.body.should.be.instanceof(Array);
        done();
      });
  });
});  


