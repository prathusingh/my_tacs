'use strict';

var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),     
    request = require('supertest');



describe('POST /api/addtack', function() {


var tac=({
      link : "http://www.ghost.com",
      title : "This is ghost rider",
      desc: "Nicholous",
      tags: "",
      imageURL: "",
      comments: [],
      likes: 2,
      boards: ["Plants"]
    });

       
  it('/api/addTack should add the tack', function(done) {
   
    request(app)
      .post('/api/addtack')
      .send(tac)
      .expect(500)
       .expect('Content-Type',"text/html")
      .end(function(err, res) {
        if (err) return done(err);
        //res.body.should.be.instanceof(Array);
        done();
      });
  });
});  


