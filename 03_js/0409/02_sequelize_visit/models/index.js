const Sequelize = require('sequelize');
const config = require('../config/config.json')["development"];
const db={}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)
// db = { "sequelize": sequelize, "Sequelize": Sequelize } 속성 추가한 것임
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')(sequelize,Sequelize);
db.User = require('./User')(sequelize,Sequelize);

module.exports = db;