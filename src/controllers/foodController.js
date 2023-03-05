const initModels = require('../models/init-models');
const sequelize = require('../models/index');

const model = initModels(sequelize);

// GET
const getFood = async (req, res) => {

    // food và food_type

    // let data = await model.food.findAll({
    //     include: ["type"] // chuỗi hoặc mảng chuỗi
    // });

    // order với user và food
    let data = await model.food.findAll({
        include: ['user_id_user_orders']
    });

    res.send(data);
}

module.exports = {
    getFood
}