const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var Topic = require('../model/topic.model.js');

db.once('open', function() {
  console.log('Connected to MongoDB Topic');

  // APIs
  // select all
  router.get('/', function(req, res) {
    Topic.find({}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    });
  });

  // count all
  router.get('/count', function(req, res) {
    Topic.count(function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });

  // create
  router.post('/', function(req, res) {
    var obj = new Topic(req.body);
    obj.save(function(err, obj) {
      if(err) {
   
        res.status(500).json(err);
        return console.error(err);
      }
      res.status(200).json(obj);
    });
  });

  // find by id
  router.get('/:id', function(req, res) {
    Topic.findOne({_id: req.params.id}, function(err, obj) {
      if(err) return console.error(err);
      res.json(obj);
    })
  });

  // update by id
  router.put('/:id', function(req, res) {
    Topic.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });

  // delete by id
  router.delete('/:id', function(req, res) {
    Topic.findOneAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });
});

module.exports = router;