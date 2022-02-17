// required packages/files
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


// port listener
const app = express();
const PORT = process.env.PORT || 3001;

// connection to db/session
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// site session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// helpers
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// connection to db/routes
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// TODO: ADD IN COOKIES FOR SESSION (ASHLEY) 
// TODO: Deploy and fix Heroku error