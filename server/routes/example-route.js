const Example = require('./../../repo/example-repo')
const express = require('express')
const router = express.Router()

// • Declaring GET method
router.get('/list', function (req, res) {
  // • Use mongoose to get all `examples` in our database
  // • How we got this find() method you'll ask? Well, that comes from our
  // declared mongoose model.
  Example.find(function (err, examples) {
    // • If there is an error, send the error. nothing after res.send(err)
    // will execute
    if (err) { res.send(err) }

    // • Return all `examples` in JSON format
    res.json(examples) // return all examples in JSON format
  })
})

// • Declaring POST method
router.post('/', function (req, res) {
  // • Create and save `example` on MongoDB.
  // • We get information form request body
  Example.create({
    title: req.body.title,
    content: req.body.content
  }, function (err, examples) {
    if (err) { res.send(err) }

    // • Get and return all the `examples` after you create another
    Example.find(function (err, examples) {
      if (err) { res.send(err) }
      res.json(examples)
    })
  })
})

// • Export router to use it on other modules
module.exports = router
