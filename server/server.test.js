const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      //supertest and expect(assertion)
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'page not found.'
          });
        })
        .end(done);
    });
  })

  describe('GET /users', () => {
    it('should return a user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({ name: 'rose', age: 20 });
        })
        .end(done);
    });
  });
});
