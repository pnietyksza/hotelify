var baseController = require('../controllers/baseController');
var loogkinforController = require('../controllers/lookingforController');
var contactController = require('../controllers/contactController');
var registerController = require('../controllers/registerController');
var loginController = require('../controllers/loginController');
var express = require('express');

var router = express.Router();

//home page
router.get('/', baseController.basecontroller);

//looking for page
router.get('/lookingfor', loogkinforController.loogkinforcontroller);
router.get('/lookingfor/:id', loogkinforController.loogkinforcontrollerID);
router.get('/contact',  contactController.contactcontroller);
router.get('/register', registerController.registercontroller);
router.get('/login', loginController.logincontroller);
router.get('/menu', (req,res)=>{
  res.render('menu', { title: 'Express' });
});


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
