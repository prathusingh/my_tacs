'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    //boardSchema = require('boardSchema');
    boardSchema = require("./user.js");
// Tack Schema

var tackSchema = new Schema({
      link : String,
      title : String,
      desc: String,
      tags: [String],
      imageURL: String,
      comments: [String],
      likes: Number,
      boards: [String],
      followstatus:String
    });


mongoose.model('Tack', tackSchema);
