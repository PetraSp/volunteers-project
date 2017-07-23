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
  var age = req.body.age
  res.render('editProfileUser',{user});
});


router.post("/editProfileUser", (req, res, next) => {
  // var userId = req.user
  console.log("inside post", req.user._id)
  var userId = req.user._id;
  var age = req.user.age;
  var country = req.user.country;
  var phone = req.user.phone;
  var occupation = req.user.occupation;
  var bio = req.user.bio;
  var av = req.user.mon;
  var av = req.user.tue;
  var av = req.user.wed;
  var av = req.user.thu;
  var av = req.user.fri;
  var av = req.user.sat;
  var av = req.user.sun;
  var avTimes = req.user.mornings;
  var avTimes = req.user.afternoons;
  var avTimes = req.user.evenings;
  var activity = req.user.activity0;
  var activity = req.user.activity1;
  var activity = req.user.activity2;
  var activity = req.user.activity3;
  var activity = req.user.activity4;
  var activity = req.user.activity5;
 
  let location = {
    type: 'Point',
    coordinates: [0, 0]
  };

  var update = {
    age: req.body.age,
    country: req.body.country,
    phone: req.body.phone,
    occupation: req.body.occupation,
    bio: req.body.bio,
    av: req.body.mon,
    av: req.body.tue,
    av: req.body.wed,
    av: req.body.thu,
    av: req.body.fri,
    av: req.body.sat,
    av: req.body.sun,
    avTimes: req.body.mornings,
    avTimes: req.body.afternoons,
    avTimes: req.body.evenings,
    activity: req.body.activity0,
    activity: req.body.activity1,
    activity: req.body.activity2,
    activity: req.body.activity3,
    activity: req.body.activity4,
    activity: req.body.activity5,
  }


  User.findByIdAndUpdate({ _id: userId },{location,update}, {new: true} ,(err, user) => {
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

//to display the volunteers database
router.get('/search/:json', function (req, res, next) {
  console.log("test")
  User.find({}, (err, users) => {
    if (err) {return next(err) }
      console.log(users)
    res.json(users);
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