const express = require('express');
const rate_resRoute = express.Router();

//import controller
const { doRate,
    getInfoRate
 } = require('../controllers/rate_resController');

//POST/PUT
rate_resRoute.post("/Rating", doRate);

//GET
rate_resRoute.get("/getRateInfo", getInfoRate);


module.exports = rate_resRoute;