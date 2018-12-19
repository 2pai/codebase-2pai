const express = require('express');
const bodyParser = require('body-parser');
const authParser = require('express-auth-parser');
const queryParser = require('express-query-parser');
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
    

    this.server.use(bodyParser.urlencoded({
        extended: true
      }));
    this.server.use(bodyParser.json());
    this.server.use(authParser);
    this.server.use(queryParser({
        parseNull: true,
        parseBoolean: true
    }));
    this.server.use(crossOrigin);
    
    this.server.get('/',(req,res) => {
        res.send('Success');
    })
    this.server.get('/lol', (req, res) => res.send('Hello World!'))

}

module.exports = appServer;