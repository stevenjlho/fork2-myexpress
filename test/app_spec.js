'use strict';
var request = require('supertest')
  , expect = require('chai').expect
  , http = require('http');

var express = require('../src/index.js');

describe('Implement Empty App', function() {
  var app = express();
  describe('as handler to http.createServer',function() {
    it('responds to /foo with 404', function(done) {
      var server = http.createServer(app);
      request(server).get('/foo').expect(404).end(done)
    });
  });
});


