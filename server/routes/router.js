const express = require('express');
// const app = express(); => this would create a new app. do this instead:
const route = express.Router()

route.get('/', (req, res) => {
  res.render('index');
})

route.get('/add-question', (req, res) => {
  res.render('add_question');
})

route.get('/update-question', (req, res) => {
  res.render('update_question');
})


module.exports = route
