// const { Sequelize } = require('sequelize');
const { successCode, errorCode } = require('../config/response');

const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const model = initModels(sequelize);

const doLike = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;

        let data = await model.like_res.findAll({
            where: {
                user_id,
                res_id
            }
        });
        
        // if not yet like ... create like
        if (!data.length) {
            await model.like_res.create({user_id,res_id, date_like: Date.now()});
            successCode(res, data, "Like success");
        } else {
            successCode(res, data, "You already like this restaurant");
        }
    }
    catch (err) {
        errorCode(res, "Lỗi BE");
    }
}
const doUnlike = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;

        let data = await model.like_res.findAll({
            where: {
                user_id,
                res_id
            }
        });

        if (data) {
            await model.like_res.destroy({
                where: {
                    user_id,
                    res_id
                }
            });
            successCode(res, data, "Unlike success");
        }
    }
    catch (err) {
        errorCode(res, "Lỗi BE");
    }
}
const getInfoLike = async (req, res) => {
    try {
        let data = await model.like_res.findAll({
            include: ["re", "user"]
        });
        successCode(res, data, "Lấy dữ liệu thành công");
    }
    catch (err) {
        errorCode(res, "Lỗi BE");
    }
}

module.exports = {
    doLike,
    doUnlike,
    getInfoLike
}