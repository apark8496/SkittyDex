// required packages/files
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// connection to db/session
const sequelize = require('./config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// port listener
const app = express();
const PORT = process.env.PORT || 3001;

// helpers
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

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

// handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// connection to db/routes
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});