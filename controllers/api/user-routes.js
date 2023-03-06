const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {    // sign Up 
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {     // Log In 
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'No user user found!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;

      res.json({ user, message: 'You are logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user found!' });
  }
});

router.post('/logout', (req, res) => {      // Logged Out
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
