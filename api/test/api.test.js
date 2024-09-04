const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // assuming your index.js exports the app

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
  it('should return Welcome to the E-commerce API!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the E-commerce API!');
        done();
      });
  });
});
