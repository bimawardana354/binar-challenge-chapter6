'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGameHistory.belongsTo(models.UserGame, {
        constraints: false,
        foreignKey: 'UserGameId',
      });
    }
  }
  UserGameHistory.init(
    {
      UserGameId: DataTypes.INTEGER,
      time: DataTypes.TIME,
      score: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'UserGameHistory',
    }
  );
  return UserGameHistory;
};
