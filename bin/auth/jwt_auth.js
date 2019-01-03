require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cfg = require('../config/globalConfig');
const wrapper = require('../helper/util/wrapper');

const createToken = async (payload) => {
  const privateKey = fs.readFileSync(await cfg.getPrivateKey(),'utf8');
  const options = {
    algorithm: 'RS256',
    audience: cfg.getJWTaudience(),
    issuer: cfg.getJWTIssuer(),
    expiresIn: '100m'
  };
  const token = jwt.sign(payload,privateKey,options);
  return token;
};

const parseHeaderToken = async (headers) => {
  if (headers && headers.authorization && headers.authorization.includes('Bearer')) {
    const partedHeader = headers.authorization.split(' ');
    if (partedHeader.length === 2) {
      return partedHeader[1];
    }
  }
  return undefined;
};

const verifyToken = async (req, res, next) => {
  const result = {
    data:null
  };
  const publicKey = fs.readFileSync(await cfg.getPrivateKey(),'utf8');
  const options = {
    algorithm: 'RS256',
    audience: cfg.getJWTaudience(),
    issuer: cfg.getJWTIssuer(),
  };
  const token = await parseHeaderToken(req.headers);
  if (!token) {
    return wrapper.response(res, 'fail', result, 'Invalid token!', 403);
  }
  let tokenDecoded;
  try{
    tokenDecoded = jwt.verify(token,publicKey,options);
  }catch(err){
    throw err;
  }
  const userId = tokenDecoded.sub;
  req.userId = userId;
  next();
};

module.exports = {
  createToken,
  verifyToken
};
