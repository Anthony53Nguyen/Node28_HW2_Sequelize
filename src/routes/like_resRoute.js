const express = require('express');
const like_resRoute = express.Router();

//import controller
const { doLike,
    doUnlike,
    getInfoLike
 } = require('../controllers/like_resController');

//POST
like_resRoute.post("/like", doLike);

//DELETE
like_resRoute.delete("/unLike", doUnlike);

//GET
like_resRoute.get("/getLikeInfo", getInfoLike);


module.exports = like_resRoute;