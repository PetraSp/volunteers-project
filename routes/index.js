var express = require('express');
var router  = express.Router();
var auth    = require('../helpers/auth');
const User  = require("../models/user");
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });
const Picture = require('../models/picture');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/where-we-work', function(req, res, next) {
  res.render('where-we-work');
});


router.get('/editProfileUser', function(req, res, next) {
  var user = req.user
  res.render('editProfileUser',{user});
});


router.post("/editProfileUser", (req, res, next) => {
  // var userId = req.user
  console.log("inside post", req.user._id)
  var userId = req.user._id
  var update = {
    age: req.body.age,
  }
  console.log(update)

  User.findByIdAndUpdate({ _id: userId }, update, (err, user) => {
    // if the user is different from null
    if (err) {return next(err);
    } else {
      console.log("secret",user)
      res.render("secret",{user})
    }
  });
});


//to display the volunteers database
router.get('/volunteersDatabase', function (req, res, next) {
  User.find({}, (err, users) => {
    if (err) {return next(err) }
      console.log(users)
    res.render('volunteersDatabase', {users});
  });
});


router.get('/secret', auth.checkLoggedIn('You must be login', '/login'), function(req, res, next) {
  var user = req.user
  console.log('user', req.user);
  res.render('secret', {user});
});

router.get('/admin', auth.checkLoggedIn('You must be login', '/login'), auth.checkCredentials('ADMIN'), function(req, res, next) {
	// console.log(req.user);
  res.render('admin', { user: JSON.stringify(req.user) });
});


router.post('/upload', upload.single('photo'), function(req, res){
  var user = req.user
  console.log("photo", req)
  pic = new Picture({
    name: req.body.name,
    pic_path: `/uploads/${req.file.filename}`,
    pic_name: req.file.originalname
  });

   var update = {
    imageUrl: `/uploads/${req.file.filename}`
  }

  pic.save((err) => {
    User.findByIdAndUpdate({ _id: user._id }, update, (err, user) => {
    // if the user is different from null
    if (err) {return next(err);
    } else {
      console.log("secret",user)
      res.redirect("/secret")
    }
  });
});




});


module.exports = router;

 // User.find('{name: "Marc", }') (err, users) => {