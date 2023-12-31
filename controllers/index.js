const UserController = require('./user_controller');
const userRoute = () => {
  const router = require('express').Router();
  const checkAuthenticationMiddleware = require('../middlewares/check_authentication');

  const controller = new UserController();

  router.get('/login', controller.loginPage);
  router.post('/login', controller.doLogin);

  const authenticated = router.use(checkAuthenticationMiddleware);
  authenticated.get('/game', controller.userPage);
  authenticated.get('/user_games', controller.adminPage);

  router.get('/logout', controller.logout);

  return router;
};

module.exports = (app) => {
  app.use('/', require('./web'), userRoute());
  app.use('/user_games', require('./user_games'), userRoute());
  app.use('/user_games_api', require('./user_games_api'));
};
