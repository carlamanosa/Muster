const mongoose = require("mongoose");
const EventSchema = require("./schema/event");
const MobSchema = require("./schema/mob");
const AboutSchema = require("./schema/about");
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
var assert = require('assert');
 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  // The password cannot be null
  password: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
  signedUp: {
    type: Boolean,
    required: true,
  },
  events: [
    {
      type: EventSchema,
    }
  ],
  mobs: [
    {
      type: MobSchema,
    }
  ],  
  abouts: [
    {
      type: AboutSchema,
    }
  ]
});

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
  next();
});

const User = mongoose.model("User", UserSchema);

// Now, the interesting part:
data = [
  {
      "email": "dee@dee.com",
      "password": "ThisPassword*9",
      "displayName": "DeeDee",
      "firstName": "Dee",
      "lastName": "Sa",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "meera@merr.com",
      "password": "ThisPassword*9",
      "displayName": "MeeraIsFire",
      "firstName": "Meera",
      "lastName": "Du",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "dillon@dillon.com",
      "password": "ThisPassword*9",
      "displayName": "DieLon",
      "firstName": "Dillon",
      "lastName": "Co",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "lawrence@lawrence.com",
      "password": "ThisPassword*9",
      "displayName": "Lauren",
      "firstName": "Lawrence",
      "lastName": "Ru",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "taylor@taylor.com",
      "password": "ThisPassword*9",
      "displayName": "Teach",
      "firstName": "Jon",
      "lastName": "Taylor",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "calum@calum.com",
      "password": "ThisPassword*9",
      "displayName": "calum-ragan",
      "firstName": "Calum",
      "lastName": "Ra",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "jo@jo.com",
      "password": "ThisPassword*9",
      "displayName": "jo",
      "firstName": "Joe",
      "lastName": "An",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "steven@steven.com",
      "password": "ThisPassword*9",
      "displayName": "smartyPantsSteven",
      "firstName": "Steven",
      "lastName": "Gu",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "sean@sean.com",
      "password": "ThisPassword*9",
      "displayName": "LeagueOfSean",
      "firstName": "Sean",
      "lastName": "Mc",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "zach@zach.com",
      "password": "ThisPassword*9",
      "displayName": "zachary",
      "firstName": "Zach",
      "lastName": "Bu",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "chris@chris.com",
      "password": "ThisPassword*9",
      "displayName": "chris",
      "firstName": "Chris",
      "lastName": "La",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  },
  {
      "email": "macie@macie.com",
      "password": "ThisPassword*9",
      "displayName": "MacieBaby",
      "firstName": "Macie",
      "lastName": "La",
      "location": {
          "city": "Irvine",
          "state": "California",
          "zip": "92697"
      },
      "signedUp": true,
      "events": [],
      "mobs": [],
      "abouts": []
  }
]
  
User.collection.insertMany(data, function(err,r) {
       assert.equal(null, err);
       assert.equal(12, r.insertedCount);
 })

module.exports = User;