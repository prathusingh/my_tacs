'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Tack = mongoose.model('Tack'),
    BoardSchema = require("../models/user.js"),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.boards_created.push(req.body.name);
  newUser.provider = 'local';
  newUser.save(function(err) {
    if (err) return res.json(400, err);
    
    req.logIn(newUser, function(err) {
      if (err) return next(err);

      return res.json(req.user.userInfo);
    });
  });
};


/**
 *  Get profile of specified user
 */
 
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

/**
 * Change password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

// Adding a tack

exports.addTack = function(req, res, next){


  console.log(req);
  //var currentUser = User.findById(req.user._id);
  var tack = new Tack(req.body);
  //var board = new BoardSchema({'name' : req.body.board});
  tack.boards.push(req.body.board);
  tack.followstatus = 'Unfollow';
  tack.save(function err(){ 
    if(err) return "Error";

  });

  //Tack.update({_id:tack._id}, {$set: {$push : {'boards' : req.body.board}}},{upsert:true},function(err,data){});

  //Tack.update()
  
  //User.update({_id: req.user._id}, { $push : {'boards_created': req.body.board}}, {upsert:true}, function(err, data){});
  //User.update({_id: req.user._id, Bor}, { $push : {'Boards': req.body.name}, {upsert:true}, function(err, data){})
  res.send(201); 


};


// Adding a Board
exports.addBoard = function(req, res, next){

  console.log(req);

  User.update({_id: req.user._id}, { $push : {'boards_created': req.body.board}}, {upsert:true}, function(err, data){});
  res.send(201); 
};

// Removing a Board
exports.removeBoard = function(req, res, next){

  console.log(req);

  User.update({_id: req.user._id}, { $pull : {'boards_created': req.body.board}}, {upsert:true}, function(err, data){});
  res.send(201); 
};


/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};
