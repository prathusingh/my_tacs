'use strict';

var mongoose = require('mongoose'),
    Tack = mongoose.model('Tack');

/**
 * Get Feed
 */
exports.feed = function(req, res) {
  return Tack.find(function (err, tacks) {
    if (!err) {
      return res.json(tacks);
    } else {
      return res.send(err);
    }
  });
};

// Delete Tack

exports.deleteTack = function(req, res){
console.log(req);
return Tack.update({link : req.body.tack.link},
		   			{$pull : {'boards' : req.body.board}, followstatus: 'Follow'}, function(err, success){

		   				if(!err){
		   					return res.json('Deleted');
		   				}
		   				else return 'error';
		   			});
// return Tack.remove(function (err, tacks) {
//     if (!err) {
//       return res.json(tacks);
//     } else {
//       return res.send(err);
//     }
};


// Removing a Tack
/*exports.deleteTack = function(req, res, next){

  console.log(req.body.link);
  console.log(req.body.board);


  Tack.update({'link': req.body.link}, { $pull : {'boards': req.body.board}}, {upsert:true}, function(err, data){});
  res.send(201); 
};*/

exports.updateTack = function(req, res, next){

  console.log(req.body.link);
  console.log(req.body.desc);
  console.log(req.body.title);


  Tack.update({'link': req.body.link}, {'desc': req.body.desc, 'title': req.body.title}, {upsert:true}, function(err, data){});
  res.send(201); 
};

//unfollow a tack from board
exports.unfollow = function(req, res){
//console.log(req);
return Tack.update({link : req.body.tack.link},
                                        {$pull : {'boards' : req.body.tack.boards[0]} ,followstatus: 'Follow'}, function(err, success){

                                                if(!err){
                                                        return res.json('unfollowed');
                                                }
                                                else return 'error';
                                        });
};

//follow a tack on a board
exports.follow = function(req, res){
//console.log(req);
return Tack.update({link : req.body.tack.link},
                                        {$push : {'boards' : req.body.board}, followstatus: 'Unfollow'}, function(err, success){

                                                if(!err){
                                                        return res.json('Followed');
                                                }
                                                else return 'error';
                                        });
};

