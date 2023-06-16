const model = require('../../models');

module.exports = class UserGameApiController {
  async list(req, res) {
    const data = await model.UserGame.findAll({
      includes: [model.UserGameHistory],
    });

    return res.json(data);
  }
  async create(req, res) {
    const { username, password } = req.body;
    await model.UserGame.create({
      username: username,
      password: password,
    });

    return res.json({ status: 'ok' });
  }

  async show(req, res) {
    const { id } = req.params;
    const data = await model.UserGame.findOne({
      where: {
        id: id,
      },
    });

    return res.json(data);
  }

  async update(req, res) {
    const id = req.params.id;
    const { username, password } = req.body;

    await model.UserGame.update(
      {
        username: username,
        password: password,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.json({
      status: 'updated',
    });
  }

  async delete(req, res) {
    const id = req.params.id;

    await model.UserGame.destroy({
      where: {
        id: id,
      },
    });

    return res.json({
      status: 'deleted',
    });
  }
};
