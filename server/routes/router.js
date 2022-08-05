const express = require('express');
// const app = express(); => this would create a new app. do this instead:
const route = express.Router()

const services = require('../services/render');


/**
* @description Root Route
* @method GET/
*/
route.get('/', services.homeRoutes);

/**
* @description Add Question Route
* @method GET/add_question
*/
route.get('/add-question', services.add_question);

/**
* @description Update Question Route
* @method GET/update_question
*/
route.get('/update-question', services.update_question);


module.exports = route
