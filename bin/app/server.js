const express = require('express');
const bodyParser = require('body-parser');
const authParser = require('express-auth-parser');
const queryParser = require('express-query-parser');
const wrapper = require('../helper/util/wrapper');
const basicAuth = require('../auth/basic_auth');
const crossOrigin = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
      res.send(200);
    }
    return next();
};

function appServer (){
    this.server = express();
    
    this.server.use(queryParser({
        parseNull: true,
        parseBoolean: true
    }));
    this.server.use(bodyParser.urlencoded({
        extended: true
      }));
    this.server.use(bodyParser.json());
    this.server.use(authParser);


    this.server.use(basicAuth.init());
    this.server.use(crossOrigin);    

    //without auth , anyone can access
    this.server.get('/',(req,res) => {
        wrapper.response(res, 'success', wrapper.data('Index'), 'This service is running properly');
    });
    
    //basic auth
    this.server.get('/basicAuth', basicAuth.isAuth,(req, res) => res.send('Hey U access this from Basic Auth!'));

}

module.exports = appServer;