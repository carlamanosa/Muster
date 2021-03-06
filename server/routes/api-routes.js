// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const router = require("express").Router();

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedData = require("../config/middleware/isAuthenticatedData");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", function (req, res) {
  db.User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then(function () {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for logging user out
router.post("/api/logout", function (req, res) {
  req.logout();
  res.json({});
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

router.get("/api/events", isAuthenticatedData, function (req, res) {
  db.User.findById(req.user._id)
    .then(function (dbUser) {
      res.json(dbUser.events);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});
router.post("/api/events", isAuthenticatedData, function (req, res) {
  const event = new db.Event({
    id: req.body.id,
    name: req.body.name,
    date: req.body.date,
    url: req.body.url
  });
  console.log(JSON.stringify(event));
  db.User.update(
    { _id: req.user._id }, 
    { $push: { events: event } })
    .then(function () {
      res.json(event);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});

router.get("/api/mobs", isAuthenticatedData, function (req, res) {
  db.User.findById(req.user._id)
    .then(function (dbUser) {
      res.json(dbUser.mobs);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});
router.post("/api/mobs", isAuthenticatedData, function (req, res) {
  const mob = new db.Mob({
    name: req.body.name,
    id: req.body.mobId
  });
  console.log(JSON.stringify(mob));
  db.User.update(
    { _id: req.user._id }, 
    { $push: { mobs: mob } })
    .then(function () {
      res.json(mob);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});

router.get("/api/locations", isAuthenticatedData, function (req, res) {
  db.User.findById(req.user._id)
    .then(function (dbUser) {
      res.json(dbUser.locations);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});
router.post("/api/locations", isAuthenticatedData, function (req, res) {
  const location = new db.Location({
    timeStamp: req.body.timeStamp,
    lat: req.body.lat,
    long: req.body.long
  });
  console.log(JSON.stringify(location));
  db.User.update(
    { _id: req.user._id }, 
    { $push: { locations: location } })
    .then(function () {
      res.json(location);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});

module.exports = router;

