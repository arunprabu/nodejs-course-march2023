const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require("./mongo");
const { Schema } = mongoose;

const accountSchema = new Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
    },
    salt: String,
    hash: String,
    createdBy: String,
    createdOn: {
      type: Date,
      default: Date.now,
    },
    updatedBy: String,
    updatedOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    strict: true // when true anything other than the above mentioned fields will not be saved.
  }
);

// to convert password into salt and hash
accountSchema.methods.encryptPassword = function(password) { // do not write arrow fn-- if so -- 'this' context will differ.
  console.log(this);
  console.log(password);
  // convert the above password.  generate salt and hash
  this.salt = crypto.randomBytes(399).toString("hex");
  console.log(this.salt);
  this.hash = crypto.pbkdf2Sync(password, this.salt, 49763, 462, "sha512").toString('hex');
  console.log(this.hash);
}

// validate password
accountSchema.methods.validatePassword = function(password) {
  // do not write arrow fn-- if so -- 'this' context will differ.
  console.log(password);
  // accessing the already saved salt
  console.log(this.salt);
  // accessing the already saved hash
  console.log(this.hash);
  // newly generating hash from entered password
  const hash = crypto.pbkdf2Sync(password, this.salt, 49763, 462, "sha512").toString("hex");
  return this.hash === hash;
}

accountSchema.methods.generateJWT = function() {
  const today = new Date();
  const tokenExpirationDate = new Date(today);
  tokenExpirationDate.setDate(today.getDate() + 60);

  // signing the payload with secret 
  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(tokenExpirationDate.getTime() / 1000, 10),
  }, 'DenoJS is better than Node JS');
}

// Let's make a collection Account with the accountSchema
module.exports = mongoose.model("Account", accountSchema);
