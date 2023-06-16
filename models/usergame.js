'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGame.hasMany(models.UserGameHistory, {
        constraints: false,
        foreignKey: 'UserGameId',
      });
      UserGame.hasOne(models.UserGameBiodata, {
        constraints: false,
        foreignKey: 'UserGameId',
      });
    }
  }
  UserGame.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'UserGame',
    }
  );
  return UserGame;
};
