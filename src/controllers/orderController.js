const { successCode, errorCode } = require('../config/response');

const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const model = initModels(sequelize);

const takeOrder = async (req, res) => {
    try {
        let { user_id, food_id, n } = req.body;

        let data = await model.order.findOne({
            where: {
                user_id,
                food_id
            }
        });

        if (!data) {

            // Find arr_sub_food
            let arr = []
            let data2 = await model.sub_food.findAll({
                where: {
                    food_id
                }
            });
            arr = data2.map(item => item.sub_id)
    
            await model.order.create({user_id,food_id, amount: n, code: "", arr_sub_id: JSON.stringify(arr)});
            
        } else {
            await model.order.update({...data, amount: data.amount+n}, {
                where: {
                    user_id
                }
            });

        }
        let newList = await model.order.findOne({
            where: {
                user_id,
                food_id
            }
        });
        successCode(res, newList, "Order success");
    }
    catch (err) {
        errorCode(res, "Lỗi BE");
    }
}

module.exports = {
    takeOrder
}