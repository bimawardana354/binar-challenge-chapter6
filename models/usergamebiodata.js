'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGameBiodata.belongsTo(models.UserGame, {
        constraints: false,
        foreignKey: 'UserGameId',
      });
    }
  }
  UserGameBiodata.init(
    {
      UserGameId: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      city: DataTypes.STRING,
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'UserGameBiodata',
    }
  );
  return UserGameBiodata;
};
