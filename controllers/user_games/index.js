const router = require('express').Router();
const checkAuthenticationMiddleware = require('../../middlewares/check_authentication');
const checkSuperUser = require('../../middlewares/check_superuser');
const UserGameController = require('./user_game_controller');

const controller = new UserGameController();

const authenticated = router.use(checkAuthenticationMiddleware).use(checkSuperUser);
authenticated.get('/', controller.index);
authenticated.get('/create', controller.create);
authenticated.get('/:id', controller.show);
authenticated.get('/:id/edit', controller.edit);
authenticated.get('/:id/delete', controller.delete);

authenticated.post('/store', controller.store);
authenticated.post('/:id/update', controller.update);

module.exports = router;
