
const Mongo = require('../../../../infra/databases/mongo');
const config = require('../../../../config/globalConfig');
const ObjectId = require('mongodb').ObjectId;

const findOneUser = async (parameter) => {
  const db = new Mongo(config.getDevelopmentMongoServer());
  db.setCollection('user');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findById = async (id) => {
  const db = new Mongo(config.getMongoDB());
  db.setCollection('user');
  const parameter = {
    _id: ObjectId(id)
  };
  const recordset = await db.findOne(parameter);
  return recordset;
};
const insertOneUser = async (payload) =>{
  const db = new Mongo(config.getMongoDB());
  db.setCollection('user');
  const insertData = await db.insertOne(payload);
  return insertData;
};

const upsertOne = async (userid,payload) => {
  const db = new Mongo(config.getMongoDB());
  db.setCollection('user');
  const upsertData = await db.upsertOne(userid,payload);
  return upsertData;
};

const deleteOne = async (payload) => {
  const db = new Mongo(config.getMongoDB());
  db.setCollection('user');
  const deleteOne = await db.deleteOne(payload);
  return deleteOne;
};

module.exports = {
  findOneUser,
  findById,
  insertOneUser,
  upsertOne,
  deleteOne
};
