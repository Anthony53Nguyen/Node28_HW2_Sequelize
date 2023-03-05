const express = require('express');
const orderRoute = express.Router();

//import controller
const { takeOrder } = require('../controllers/orderController');

orderRoute.post("/takeOrder", takeOrder);

module.exports = orderRoute;