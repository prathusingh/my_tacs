'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('GET /api/updatetack', function() {
  var body ={"link":"http://indianExpress.com","desc":"Here it is ","title":"Found it !!"};
  it('should respond with JSON array', function(done) {
    request(app)
      .post('/api/updatetack')
      .send(body)
      .expect(201)
      .expect('Content-Type', "text/plain")
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

