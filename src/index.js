const express = require('express');
const app = express();
const db = require('./db');
app.use(express.json());
app.use(express.static("."));

const cors = require('cors');
app.use(cors());

app.listen(8080); 

//import rootRoute
const rootRoute = require('./routes/rootRoute');
app.use("/api",rootRoute)

// yarn add mysql2
//sequelize-auto -h localhost -d db_food -u root -x 1234-pw -p 3306 --dialec mysql -o src/models -l es6