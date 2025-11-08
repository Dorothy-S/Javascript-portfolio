var express = require('express'); 
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Dorothy Sahijwani', activePage: 'home' });
});

/* home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/index', { title: 'Dorothy Sahijwani', activePage: 'home' });
});

/* About page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About Me', activePage: 'about' });
});

/* projects page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Projects', activePage: 'projects' });
});

/* contact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact Me', activePage: 'contact' });
});

module.exports = router; 
 