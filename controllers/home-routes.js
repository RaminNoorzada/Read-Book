const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/',withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({   // Post submit for user 
     where: {
      user_id: req.session.user_id,
     },
     include: [
      {
        model: Comment,
        include: {
          model: User,
          attributes: [' username'],
        },
      },
     
     {
      model: User,
      attributes: ['username'],
     }
    ],
  })
  const posts = postData.map((post) => post.get({ plain: true }))
  console.log(posts)
  req.render('dashboard', { post, logged_in: req.session.logged_in })
  
  } catch (err) {
    res.redirect('/');
  }
});

router.get('/new', (req, res) => {      // New post
    res.render('new-post')
  })

router.get('/edit/:id', withAuth, async (req, res) => {

  try{
    const postData = await Post.findByPk(req.params.id)
    if (postData) {
      const = postData.get({ plain: true})
      res.render('edit-post', { post })
    } else {
      req.statusCode(404).end()
    }
  } catch (err) {
    req.redirect('login')
  }
  
})
module.exports = router;
