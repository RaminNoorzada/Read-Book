const path = require('path'); //Import Node.js path module
const express = require('express'); //Import Express.js lib
const session = require('express-session'); //Import Express-session middleware
const exphbs = require('express-handlebars'); //Import Express handlebars tems
const helpers = require('./utils/helpers'); //Import custrm helpers modu;e

const routes = require('./controllers') //Import app's controllers

const app = express();
const PORT = process.env.PORT || 3001; //Setting the port number

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = { 
  secret: 'Super',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess)); //Use the express-session middleware with config ops

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); //Parsing JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT, () => { //Start tthe server
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
