'use strict'
var mongoose = require('mongoose'),
  Dream = mongoose.model('Dreams')

exports.list_all_dreams = function (req, res) {
  Dream.find({}, function (err, dream) {
    if (err) { res.send(err) }
    res.json(dream)
  })
}

exports.create_a_dream = function (req, res) {
  var new_dream = new Dream(req.body)
  new_dream.save(function (err, dream) {
    if (err) { res.send(err) }
    res.json(dream)
  })
}

exports.read_a_dream = function (req, res) {
  Dream.findById(req.params.dreamId, function (err, dream) {
    if (err) { res.send(err) }
    res.json(dream)
  })
}
exports.find_user = function (req, res) {
  var query = Dream.find({ 'username': req.params.term })
  console.log('searching' + req.params.term)
  query.select('username description tags Created_date durationInHours')
  // limit results to 10
  query.limit(20)
  // sort by x
  // query.x({ variable: -1 });

  // execute the query at a later time
  query.exec(function (err, dream) {
    if (err) { res.json(err) };
    res.json(dream)
  })
}

exports.find_dream = function (req, res) {
  var query = Dream.find({ 'tags': req.params.term })
  console.log('searching' + req.params.term)
  query.select('username description tags Created_date')
  // limit results to 10
  query.limit(10)
  // sort by x
  // query.x({ variable: -1 });

  // execute the query at a later time
  query.exec(function (err, dream) {
    if (err) { res.json(err) };
    res.json(dream)
  })
}
exports.update_a_dream = function (req, res) {
  Dream.findOneAndUpdate({ _id: req.params.dreamId }, req.body, { new: true }, function (err, dream) {
    if (err) { res.send(err) }
    res.json(dream)
  })
}

exports.delete_a_dream = function (req, res) {
  console.log('delete')

  Dream.remove({
    _id: req.params.dreamId
  }, function (err, dream) {
    if (err) { res.send(err) }
    res.json({ message: 'Dream successfully deleted' })
  })
}
