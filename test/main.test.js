const request = require('supertest');
const Api = require('../bin/app/server');



describe('Test Server', () => {
  let appServer;
  beforeEach(() => {
    appServer = new Api();
    this.server = appServer.server;
  });
  let requestRespond = {
    'success': true,
    'data': 'Index',
    'message': 'This service is running properly',
    'code': 200
  };

  it('Should return code 200 for request /', async () => {
    const req = await request(this.server).get('/');
    expect(req.statusCode).toBe(200);
  });

  it('Should be same respond ',async () => {
    const req = await request(this.server).get('/');
    const  text  = JSON.parse(req.text);
    expect(text).toMatchObject(requestRespond);
  });

  it('should be respond unauthorized',async () => {
    const req = await request(this.server).get('/basicAuth').auth('','',{type:'basic'});
    expect(req.text).toEqual('Unauthorized');
  });

  it('should be 401 error code',async () => {
    const req = await request(this.server).get('/basicAuth').auth('','',{type:'basic'});
    expect(req.statusCode).toEqual(401);
  });

  it('should be equalTo respond',async () => {
    const req = await request(this.server).get('/basicAuth').auth('2pai','development-1290-2018-2-auth-137238',{type:'basic'});
    expect(req.text).toEqual('Hey U access this from Basic Auth!');
  });
});
