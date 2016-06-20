var request = require('supertest');
var assert = require('assert');
var sinon = require('sinon');

var client = require('./../client');

var stubMethod = function(){
	return {
		promise: function(){
			return Promise.resolve();
		}
	};
};

describe('telegram bot boilerplate', function(){
	before('stub setWebhook method', function(){
		sinon.stub(client, 'setWebhook', stubMethod);
	});
	
	var app = require('./../app');
	
	describe('GET /', function(){
		it('returns JSON', function(done){
			request(app)
				.get('/')
				.expect(200)
				.expect('Content-Type', /json/)
				.expect(function(response){
					var payload = JSON.parse(response.text);
					assert.strictEqual(payload.ok, true);
				})
				.end(done);
		});
	});
	describe('POST /webhook', function(){
		before('stub telegram clients', function(){
			sinon.stub(client, 'sendMessage', stubMethod);
		});
		it('returns 200 when passing a well-formed payload', function(done){
			request(app)
				.post('/webhook')
				.send(require('./fixtures/message'))
				.expect(200)
				.expect('Content-Type', /json/)
				.expect(function(response){
					var payload = JSON.parse(response.text);
					assert.strictEqual(payload.ok, true);
				})
				.end(done);
		});
		after('removing stubs', function(){
			client.sendMessage.restore();
		});
	});
	describe('GET /webhook', function(){
		it('returns 404', function(done){
			request(app)
				.get('/webhook')
				.expect(404)
				.end(done);
		});
	});
	describe('undefined routes', function(){
		it('returns 404', function(done){
			request(app)
				.get('/foo/bar')
				.expect(404)
				.end(done);
		});
	});
});
