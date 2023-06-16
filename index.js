const express = require('express');
const expressSession = require('express-session');
const app = express();
const models = require('./models');
const PORT = 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: 'anrdaiamwab',
    // cookie: {
    //   maxAge: 1000 * 60 * 60, // 1 hour
    // },
  })
);

require('./controllers')(app);

models.sequelize
  .authenticate()
  .then(() => {
    console.log('connected');
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
