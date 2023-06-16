const credentials = require('../data/users.json');
const { INTEGER } = require('sequelize');
const models = require('../models');

class UserController {
  async loginPage(req, res) {
    // if (req.session.User) {
    //   return res.redirect('/');
    // }

    return res.render('login');
  }

  async doLogin(req, res) {
    const { username, password } = req.body;

    const foundIndex = credentials.findIndex((crendetial) => {
      return crendetial.username == username && crendetial.password == password;
    });

    if (foundIndex == -1) {
      return res.redirect('/login');
    }

    const userLogin = credentials[foundIndex];

    // set session
    req.session.User = userLogin;

    // insert ke database
    if (userLogin.role == 'superuser') {
      return res.redirect('/user_games');
    } else if (userLogin.role == 'user') {
      return res.redirect('/game');
    }
  }

  async userPage(req, res) {
    return res.render('game');
  }

  async adminPage(req, res) {
    const { role } = req.session.User;
    if (role != 'superuser') {
      return res.redirect('/login');
    }

    const listOfUserGames = await models.UserGame.findAll();

    res.render('user_games/', {
      data: listOfUserGames,
    });
  }

  async logout(req, res) {
    req.session.destroy(() => {
      // update ke table user login history dan set logoutAt = new Date where historyId
      return res.redirect('/login');
    });
  }
}

module.exports = UserController;
