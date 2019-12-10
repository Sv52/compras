var request = require('supertest');
var app = require('../routes/index');
var expect = require('chai').expect
var assert = require('assert');


describe('Unit testing the /home route', function() {

    it('should return OK status', function() {
        return request(app)
            .get('/')
            .then(function(response) {
                assert.equal(response.status, 200)
            })
    });

});