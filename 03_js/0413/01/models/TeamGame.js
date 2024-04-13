const TeamGameModel = (sequelize, DataTypes)=>{
    const TeamGame = sequelize.define(
        "TeamGame", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            }
        }, {
            freezeTableNAme: true,
        }
    )
    return TeamGame;
}

module.exports = TeamGameModel;