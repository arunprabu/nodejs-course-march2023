// Let's setup the schema 
// npm i mongoose
const mongoose = require('./mongo');

const { Schema } = mongoose;

// Let's have schema for our collection -- named employeeSchema 
// building a collection with fields and datatypes of each field
const employeeSchema = new Schema({
  name: String,
  phone: String,
  email: {
    type: String,
    unique: true, // unique email
    required: true, // mandatory field
  },
  createdBy: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedBy: String,
  updatedOn: {
    type: Date,
    default: Date.now,
  }
}, {
  strict: false // anything other than the above mentioned fields can also be saved.
});

module.exports = mongoose.model('Employee', employeeSchema);