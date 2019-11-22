const mongoose = require("mongoose");
const CandleSchema = require("./schema/candle");
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

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
  candles: [
    {
      type: CandleSchema,
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

module.exports = User;