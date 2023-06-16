const router = require('express').Router();
const UserGameApiController = require('./user_game_api_controller');

const controllers = new UserGameApiController();

router.get('/', controllers.list);
router.post('/', controllers.create);
router.delete('/:id', controllers.delete);
router.get('/:id', controllers.show);
router.put('/:id', controllers.update);

module.exports = router;

/* How to access http://localhost:3000/user_games_api at postman

1. open up Postman
2. create a POST request
3. type url http://localhost:3000/login
4. under body tab -> click on x-www-form-urlencoded
5. add a key username and value su
6. add a key password and value su
7. click send, and you have logged in session
8. now you can access url http://localhost:3000/user_games_api 
*/
