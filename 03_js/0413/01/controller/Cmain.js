const { Op } = require('sequelize');
const { Player, Profile, Game, Team, TeamGame } = require('../models');

//첫화면
exports.main = (req,res)=>{
    res.render('index')
}

//모든 선수 보기
exports.getAllPlayer = async (req,res)=>{
    try{
        const players = await Player.findAll();
        console.log(players);
        res.json(players)
    } catch(err){
        console.log('err:', err);
        res.status(500).send('server error')
    }
};

//특정 선수 조회 /players/:playerId
exports.getPlayer = async (req,res)=>{
    try{
        console.log(req.params);
        const { playerId } = req.params;
        const Player = await Player.findOne({
            where: { player_id: playerId },
            include: [{ model: Profile, attributes: ['position', 'salary'] }]
        })
    } catch(err){
        console.log('err:', err);
        res.status(500).send('server error')
    }
};

//선수 추가 post /players
exports.postPlayer = async (req, res) => {
    try{
      console.log(req.body);
      const { name, age, teamId } = req.body;
      const newPlayer = await Player.create({
        // 보내려는 것:name, DB 컬럼명 name으로
        // 동일하다면 xx:xx형태가 아닌 name이라는 이름만 써도 ok
        name,
        age,
        team_id: teamId,
      });
      console.log(newPlayer);
      res.send(newPlayer)
    } catch(err){
      console.log("err", err);
      res.status(500).send("server err");
    }
};

//업데이트 /players/:playerId/team
exports.patchPlayer = async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.params);
      const { team_id } = req.body;
      const { playerId } = req.params;
      const updatedPlayer = await Player.update(
        {
          teamid: team_id,
        },
        {
          where: { player_id: playerId },
        }
      );
      console.log(updatedPlayer); //[0] / [1] >> 성공또는 실패
      console.log(updatedPlayer[0]);
      res.json(updatedPlayer);
    } catch (err) {
      console.log("err", err);
      res.status(500).send("server err");
    }
};

//삭제 /players/:playerId
exports.deletePlayer = async (req, res) => {
    try {
      console.log(req.params.playerId);
      const { playerId } = req.params;
      const isDeleted = await Player.destroy({
        where: {
          player_id: playerId,
          // 컬럼명: 조건
        },
      });
      // 1번 삭제요청 두 번 보내면
      // 첫번쨰 요청은 1번 아이디가 있어서 삭제성공(1)
      // 똑같은 요청을 다시 보내면 where 조건 찾지 못해서 실패(0)
      console.log(isDeleted); //1 or 0
      if (isDeleted) res.send("삭제 완료");
      else return res.send(false);
    } catch (err) {
      console.log("err", err);
      res.status(500).send("server err");
    }
};

//GET /teams
exports.getTeams = async (req, res) => {
    try {
      console.log(req.query);
      const { sort, search } = req.query;
      let teams;
       if (sort === "name_asc") {
        teams = await Team.findAll({
          attributes: ["team_id", "name"],
          order: [["name", "ASC"]],
        });
      } else if (search) {
        teams = await Team.findAll({
          attributes: ["team_id", "name"],
          where: {
            name: { [Op.like]: `%${search}%` },
          },
        });
      } else {
           teams = await Team.findAll({
          attributes: ["team_id", "name"],
        });
      }
      if (teams.length === 0) res.send("다시 검색해보세요. 정보가 없습니다.");
      else res.send(teams);
    } catch (err) {
      console.log("err", err);
      res.status(500).send("server err");
    }
};

//GET /teams/:teamId (ex. teams/3)
exports.getTeam = async (req, res) => {
    try {
      console.log("~~여기입니다면만");
      console.log(req.params); // teamId:~
      const { teamId } = req.params;
      const team = await Team.findOne({
        where: { team_id: teamId },
      });
      res.json(team);
    } catch (err) {
      console.log("err", err);
      res.status(500).send("server err");
    }
};

//특정 팀의 모든 선수 조회, GET /teams/:teamId/players
exports.getTeamPlayers = async (req, res) => {
    try {
      const teamPlayers = await Team.findOne({
        where: { team_id: teamId },
        include: [{ model: Player }],
      });
      res.send(teamPlayers);
    } catch (err) {
      console.log("err", err);
      res.status(500).send("server err");
    }
};

// GET /teamgames
exports.getAllGame = async (req, res) => {
    try {
      console.log(Team);
      console.log(Game);
      console.log(TeamGame);
      const allGame = await Team.findAll({
        include: [{ model: Game }],
      });
      console.log(allGame);
      res.send(allGame);
    } catch (err) {
      console.log("err", err);
      res.status(500).send("server err");
    }
};