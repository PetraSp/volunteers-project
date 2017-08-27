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


router.get('/editProfileUser/:id', function(req, res, next) {
  const userId = req.params.id;
  // var age = req.body.age
  console.log("UserID" + userId)

  User.findById(userId, (err, user) => {
    if (err) {return next (err);}
    res.render('editProfileUser',{user});
  });
});


router.post('/edit/:id', (req, res, next) => {
  var userId = req.user._id
    let update = {
    age: req.body.age,
    country: req.body.country,
    phone: req.body.phone,
    occupation: req.body.occupation,
    bio: req.body.bio,
    mon: req.body.mon,
    tue: req.body.tue,
    wed: req.body.wed,
    thu: req.body.thu,
    fri: req.body.fri,
    sat: req.body.sat,
    sun: req.body.sun,
    mornings: req.body.mornings,
    afternoons: req.body.afternoons,
    evenings: req.body.evenings,
    // activity: req.body.activity0,
    // activity: req.body.activity1,
    // activity: req.body.activity2,
    // activity: req.body.activity3,
    // activity: req.body.activity4,
    // activity: req.body.activity5,
  };


User.findByIdAndUpdate(userId, update, (err, user) => {
    if (err) {return next(err); }
    console.log(user)
    return res.redirect("/secret");
  });
});


router.post("/editnHome/:id", (req, res, next) => {
var userId = req.user._id;
var long;
var lat;

  if(req.body.longitude === '') {
  long = 0
  } else {
    long = Number(req.body.longitude)
  }

  if(req.body.latitude === '') {
  lat = 0
  } else {
    lat = Number(req.body.latitude)
  }

  let location = {
    type: 'Point',
    coordinates: [long, lat]
  };

  let update = {
    address: req.body.address,
    location: location,
    contact: req.body.contact,
    phone: req.body.phone,
    needs: req.body.needs
  };


User.findByIdAndUpdate(userId, update, (err, user) => {
    if (err) {return next(err); }
    console.log(user)
    return res.redirect("/secret");
  });
});


//   User.findByIdAndUpdate({ _id: userId },{location,update}, {new: true} ,(err, user) => {
//     // if the user is different from null
//     if (err) {return next(err);
//     } else {
//       console.log("secret",user)
//       res.render("secret",{user})
//     }
//   });
// });


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
  var user = req.user._id
  console.log('user', req.user);
   User.findById(user, (err, user) => {
    if (err) {return next (err);}
     res.render('secret', {user});
  });

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
