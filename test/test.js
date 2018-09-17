const chai = require('chai');
const expect = require('chai').expect;
var createError = require('http-errors');

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /api/', function() {
    this.timeout(10000); // How long to wait for a response (ms)

    before(function() {
    });

    after(function() {
    });

    // POST - Save a file uploaded from client
    it('should return a success message after successful upload file', function() {
        return chai.request(app)
        .post('/api/saveFile')
        .attach('./test/server.xml')
        .type('multipart/form-data')
        .then(function(res) {
            expect(res).to.have.status(500);
            expect(res.body).to.be.an('object');
        });
    });

    // GET - Invalid path
    it('should return Not Found', function() {
        return chai.request(app)
        .get('/api/test/INVALID_PATH')
        .then(function(res) {
            throw createError(404);
        })
        .catch(function(err) {
            expect(typeof(err)).to.equal('object');
            expect(err.message).to.equal('Not Found');
            expect(err.status).to.equal(404);
        });
    });

    var num1 = 25, num2 = 5;
    // GET - /:nbr1/paramsApi/:nbr2 find product of 2 numbers
    it('should multiply the input numbrs', function() {
        return chai.request(app)
        .get(`/api/${num1}/paramsApi/${num2}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.result).to.eqls('25 * 5 = 125');
        });
    });

    // POST - /strNonOccr find first occurence of non-repeating char
    it('should return first non-repeating char from input string', function() {
        return chai.request(app)
        .post('/api/strNonOccr')
        .send({
            inputStr: 'testingse'
        })
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.result).to.eql('i');
        })
        .catch(function(err) {
            expect(err).to.have.status(400);
        });
    });
});