var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // rendering the Template powered by Pug
  res.render('index', { title1: 'Express' });
});

module.exports = router;
