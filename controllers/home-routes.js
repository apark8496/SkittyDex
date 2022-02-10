const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

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