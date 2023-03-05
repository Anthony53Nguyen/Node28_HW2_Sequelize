const { successCode, errorCode } = require('../config/response');
const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const model = initModels(sequelize);

const doRate = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body;
        
        let data = await model.rate_res.findOne({
            where: {
                user_id,
                res_id
            }
        });

        if (data) {
            await model.rate_res.destroy({
                where: {
                    user_id,
                    res_id
                }
            });   
        }

        await model.rate_res.create({user_id,res_id, amount, date_rate: Date.now()});

        let newList = await model.rate_res.findOne({
            where: {
                user_id,
                res_id
            }
        });
        
        successCode(res, newList, "Rating success");
    }
    catch (err) {
        errorCode(res, "Lỗi BE");
    }
}

const getInfoRate = async (req, res) => {
    try {
        let data = await model.rate_res.findAll({
            include: ["re", "user"]
        });
        successCode(res, data, "Lấy dữ liệu thành công");
    }
    catch (err) {
        errorCode(res, "Lỗi BE");
    }
}

module.exports = {
    doRate,
    getInfoRate
}