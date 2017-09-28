var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./server.js');
var should = chai.should();


chai.use(chaiHttp);



// Tests are hierarchical. Here we define a test suite for our calculator.
describe('API checking', ()=>
 {
	// And then we describe our testcases.
	it('should logout to the posted value',(done)=>
	{
		var value={username:"vijay"}
		chai.request(server)
		.post('/logout')
		.send(value)
		.end((err,res)=>
	{
		res.should.have.status(200);
		done();
	});

});

	it('html messages are encrypted ',(done)=>
{
	var value={message:"<html><body>vijay</body></html"}
	chai.request(server)
	.post('/encode')
	.send(value)
	.end((err,res)=>
{
	res.should.have.status(200);
	done();
});
});

	it('Messages are retrieving from db',(done)=>
{
	chai.request(server)
	.get('/history')
	.end((err,res)=>
	{
	res.should.have.status(200);
  res.body.should.be.a('Object');
  // expect(res.body.should.be.a('Object')).should.be.true;
  done();
});
});
  it('valid token',(done)=>
{
  var value={username: "vijay",password:"qwerty@6",token:"fbsdhfg"};
  chai.request(server)
  .post('/checkUserLogin')
  .send(value)
  .end((err,res)=>
  {
    res.should.have.status(200);
    done();
  });
});
});
