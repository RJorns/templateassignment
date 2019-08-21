const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// GET
router.get('/index/add-users', (req, res, next) => {
  res.render('add-users', {
    pageTitle: 'Users Page',
    path: '/index/add-users',
    formsCSS: true,
    indexCSS: true,
    usersCSS: true,
    activeUsers: true
  });
});

// POST
router.post('/add-users', (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect('/index');
});

exports.routes = router;
exports.users = users;
