const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Team } = require('../models');

router.get('/', async (req, res) => {
  try{
    const postData = await Post.findAll({
      attributes: [
          'id',
          'post',
          'title',
          'created_at',
        ],
      order: [[ 'created_at', 'DESC']],
      include: [
          {
              model: User,
              attributes: ['username']
          },
          {
              model: Comment,
              attributes: ['id', 'comment', 'postID', 'userID', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          }
      ]
    });

    const posts = postData.map(post => post.get ({plain: true}));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in
    });
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try{
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'post',
        'title',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment', 'postID', 'userID', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
      ]
    })

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = postData.get({ plain: true});
    res.render('single-post', {
      post,
      logged_in: req.session.logged_in
    });
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const topTenTeamData = await Team.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Team,
          attributes: ['id', 'teamTitle', 'team', 'userID']
        }
      ]
    });

    res.render('homepage', {
      logged_in: req.session.logged_in
    })

  } catch (err) {
    res.status(500).json(err);
  }
});


// GET specific team from dashboard
router.get('/dashboard/team/:id', async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.id, { include: [{ model: User, attributes: { exclude: 'password' } }, { model: Team }] });
    const team = teamData.get({ plain: true });
  
    res.render('userteam', {
      ...team,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;