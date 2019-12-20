const request = require('supertest');

const server = require('./server');

describe('server.js', function() {
	describe('environment', function() {
		it('should set environment to testing', function() {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});

	describe('GET /', function() {
		it('should return a 200 OK', function() {
			return request(server).get('/').then((res) => {
				expect(res.status).toBe(200);
			});
		});
		it('should return JSON', function() {
			return request(server).get('/').then((res) => {
				expect(res.type).toMatch(/json/i);
			});
		});
		it("should return {api: 'She works!'}", function() {
			return request(server).get('/').then((res) => {
				expect(res.body.api).toBe('She works!');
			});
		});
	});

	describe('when dinosaurs get extinct', () => {
		it('status code should be 200', async () => {
			const res = await request(server).delete('/dinosaurs/1');
			console.log(res.body);
			expect(res.status).toBe(200);
		});

		it('response should be JSON', async () => {
			const res = await request(server).delete('/dinosaurs/1');
			expect(res.type).toMatch(/json/i);
		});
	});

	describe('when dinosaurs reproduce', () => {
		it('status code should be 201', async () => {
			const res = await request(server).post('/dinosaurs').send({ name: 'Three Horn', type: 'Herbivore' });
			expect(res.status).toBe(201);
		});
		it('response should be JSON', async () => {
			const res = await request(server).post('/dinosaurs');
			expect(res.type).toMatch(/json/i);
		});
	});
});
