const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /api/', function() {
    this.timeout(5000); // How long to wait for a response (ms)
    var filename = 'x.png', boundary = Math.random()

    before(function() {

    });

    after(function() {

    });

    // POST - Save a file uploaded from client
    it('should return a success message after successful upload file', function() {
        return chai.request(app)
        .post('/api/saveFile')
        .set('Content-Type', 'multipart/form-data; boundary=' + boundary)
        .write('--' + boundary + '\r\n')
        .write('\r\n')
        .write(fs.readFileSync('/'+filename))
        .write('\r\n--' + boundary + '--')
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.result).to.be.an('string');
        });
    });

    // GET - Invalid path
    it('should return Not Found', function() {
        return chai.request(app)
        .get('/api/INVALID_PATH')
        .then(function(res) {
            throw new Error('Path exists!');
        })
        .catch(function(err) {
            expect(err).to.have.status(404);
            expect(err).to.be.json;
            expect(err.body).to.be.an('object');
            expect(err).to.have.statusCode('string');
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