const express = require('express');
const foodRoute = express.Router();

// import controller xử lý food
const { getFood } = require('../controllers/foodController');

foodRoute.get("/getFood",getFood);

module.exports = foodRoute;