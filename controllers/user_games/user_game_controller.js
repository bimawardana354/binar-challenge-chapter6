const { INTEGER } = require('sequelize');
const models = require('../../models');

class UserGameController {
  // view
  async index(req, res) {
    const listOfUserGames = await models.UserGame.findAll();

    res.render('user_games/index', {
      data: listOfUserGames,
    });
  }
  async create(req, res) {
    res.render('user_games/create');
  }
  async edit(req, res) {
    const { id } = req.params;
    const userGame = await models.UserGame.findOne({
      where: {
        id: id,
      },
    });
    res.render('user_games/edit', {
      data: userGame,
    });
  }
  async show(req, res) {
    const { id } = req.params;
    const userGame = await models.UserGame.findOne({
      where: {
        id: id,
      },
      include: [models.UserGameBiodata, models.UserGameHistory],
    });

    res.render('user_games/show', {
      data: userGame,
    });
  }

  // action
  async store(req, res) {
    const { username, password } = req.body;

    await models.UserGame.create({
      username: username,
      password: password,
    });

    return res.redirect('/user_games');
  }

  async update(req, res) {
    const { id } = req.params;
    const { username, password } = req.body;

    await models.UserGame.update(
      {
        username,
        password,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.redirect('/user_games');
  }

  async delete(req, res) {
    const { id } = req.params;

    await models.UserGame.destroy({
      where: {
        id,
      },
    });

    return res.redirect('/user_games');
  }
}

module.exports = UserGameController;
