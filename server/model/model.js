const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  question : {
    type : String,
    required : true,
    unique : true
  },
  answer : {
    type : String,
    required : false
  },
  topic : String,
  status : String
})

const Questiondb = mongoose.model('questiondb',schema);

module.exports = Questiondb;
