'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//만들어진 모델 불러오기
const PlayerModel = require('./Player')(sequelize,Sequelize);
const ProfileModel = require('./Profile')(sequelize,Sequelize);
const GameModel = require('./Game')(sequelize,Sequelize);
const TeamModel = require('./Team')(sequelize,Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize,Sequelize);

//모델 간 관계 설정 1:1
PlayerModel.hasOne(ProfileModel, {
  //두 모델을 연결하는 키와 관련해 설정
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id"
})

ProfileModel.belongsTo(PlayerModel, {
  foreignKey: "player_id"
})

//모델 간 관계 설정 1:n
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid",
  sourceKey: "team_id"
})

PlayerModel.hasMany(TeamModel, {
  foreignKey: "teamid",
  targetKey: "team_id"
})

//모델 간 관계 설정 n:m
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id"
})

GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id"
})

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;