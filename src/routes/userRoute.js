const express = require('express');
const userRoute = express.Router();

//import controller
const { getUser, createUser,
updateUser } = require('../controllers/userController');

//GET
userRoute.get("/getUser/:id", getUser);

//POST
userRoute.post("/createUser", createUser);

//PUT
userRoute.put("/updateUser/:user_id", updateUser);

//DELETE


module.exports = userRoute;