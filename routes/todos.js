var express = require('express');
const Todo = require('../models').Todo;

var router = new express.Router();

router.use(function (req, res, next) {
  console.log("Using the express router");
  next();
});

router.route('/todos')
  .get(function (req, res) {
    Todo.all()
    // Todo.all returns a promise - so use .then().catch()
    .then(todos => res.json({'todos':todos}))
    .catch(error => res.json({'error':error}));
  })
  .post(function (req, res) {
    console.log("Running the post route");
    console.log(req.body.title);
    Todo.create({
        title: req.body.title,
      })
      // Todo.create returns a promise - so use .then().catch()
      .then(todo => {
        console.log(todo);
        res.json({'todo': todo})
      })
      .catch(error => {
        console.log(error);
        res.json({'error':error})
      });
  });

  module.exports = router;
