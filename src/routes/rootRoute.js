const express = require('express');
const rootRoute = express.Router();

const rate_resRoute = require('./rate_resRoute');
const orderRoute = require('./orderRoute');
const like_resRoute = require('./like_resRoute')

// const userRoute = require('./userRoute')
// const foodRoute = require('./like_resRoute')


// localhost:8080/api/like_res/...
rootRoute.use("/like_res", like_resRoute);
// localhost:8080/api/rate_res/...
rootRoute.use("/rate", rate_resRoute);
// localhost:8080/api/order/takeOrder
rootRoute.use("/order", orderRoute);

// // localhost:8080/api/rate/...
// rootRoute.use("/user", userRoute);

// // localhost:8080/api/order/takeOrder
// rootRoute.use("/food", foodRoute);



module.exports = rootRoute;