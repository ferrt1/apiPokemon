const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suite de pruebas teams', () => {
    it('should return the team of the given user', (done) => {
        chai.request(app)
        .post('/auth/login')
        .set('content-type', 'application/json')
        .send({user: 'bettatech', password: '1234'})
        .end((err, res) => {
            //Expect valid login
            chai.assert.equal(res.statusCode, 200);
            chai.request(app)
                .get('/teams')
                .set('Authorization', `JWT ${res.body.token}`)
                .end((err, res) => {
                    
                    chai.assert.equal(res.statusCode, 200);
                    chai.assert.equal(res.body.trainer, 'bettatech');
                    chai.assert.equal(res.body.team.length, 2);
                    chai.assert.equal(res.body.team[0].name, 'Charizard');
                    chai.assert.equal(res.body.team[1].name, 'Blastoise');
                    done();
                });
        });
    });
});