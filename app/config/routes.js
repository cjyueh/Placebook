var express        = require('express');
var router         = express.Router();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var usersController = require('../controllers/usersController');

router.route('/users')
  .get(usersController.getAll)
  .post(usersController.createUser);

module.exports = router;