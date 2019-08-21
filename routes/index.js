const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const indexData = require('./index');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = userRoutes.users;
  res.render('index', {
    use: users,
    pageTitle: 'Main',
    path: '/index',
    hasUsers: users.length > 0,
    activeIndex: true,
    indexCSS: true
  });
});

module.exports = router;
