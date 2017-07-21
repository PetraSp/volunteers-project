const express  = require('express');
const router   = express.Router();

const bcrypt     = require("bcrypt");
const bcryptSalt = 10;
const passport   = require("../helpers/passport");

const User     = require("../models/user");

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('auth/signup', { "message": req.flash("error") });
});

router.post("/signup", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.user;
  var lat = req.body.lat;
  var lng = req.body.lng;

  console.log('user -> ', req.body)
  if (username === "" || password === "") {
    req.flash('error', 'Indicate username and password' );
    res.render("auth/signup", { "message": req.flash("error") });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    // if the user is different from null
    if (user !== null) {
      req.flash('error', 'The username already exists' );
      res.render("auth/signup", { message: req.flash("error") });
      return;
    }

    var salt     = bcrypt.genSaltSync(bcryptSalt);
    var hashPass = bcrypt.hashSync(password, salt);

    // any values you need from form need to be added here
    var newUser = User({
      username : username,
      role: role,
      fullname : req.body.fullname,
      password: hashPass,
      location: { type: "Point", coordinates: [0,0] }
    });

    newUser.save((err) => {
      if (err) {
        console.log('error', err)
        req.flash('error', 'Problem creating a User' );
        res.redirect("/signup");
      } else {
       
        passport.authenticate("local")(req, res, function () {
           res.render('secret', { user: req.user });
        });
      }
    });
  });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/logout", (req, res) => {
  req.logout();
  delete res.locals.currentUser;
  delete req.session.passport;
  // delete currentUser and passport properties 
  // becasuse when we calling req.logout() is leaving an empty object inside both properties.
  res.redirect('/');
  
  
});

// router.get("/auth/facebook",          passport.authenticate("facebook"));
// router.get("/auth/facebook/callback", passport.authenticate("facebook", {
//   successRedirect: "/secret",
//   failureRedirect: "/"
// }));

module.exports = router;
