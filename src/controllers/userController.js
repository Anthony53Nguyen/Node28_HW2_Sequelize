// const User = require('../models/user');
const { Sequelize } = require('sequelize');
const { successCode, failCode, errorCode } = require('../config/response');

const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const model = initModels(sequelize);

const Op = Sequelize.Op;

const getUser = async (req, res) => {
    try {
        let { id } = req.params;

        let data = await model.user.findAll();

        // res.status(200).send(data);
        successCode(res, data, "Lấy dữ liệu thành công");

    }
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res, "Lỗi BE");

    }
}


const createUser = async (req, res) => {
    try {
        //lấy từ FE
        let { full_name, email, pass_word } = req.body;

        let modelUser = {
            full_name,
            email,
            pass_word
        }

        //validate controller

        // thêm một dòng dữ liệu vào table
        await model.user.create(modelUser);

        // res.status(200).send("Tạo mới thành công");
        successCode(res, modelUser, "Tạo mới thành công");
    }
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res, "Lỗi BE");

    }
}

const updateUser = async (req, res) => {
    try {

        let { user_id } = req.params;
        let { full_name, email, pass_word } = req.body;

        let modelUser = {
            full_name,
            email,
            pass_word
        }

        await model.user.update(modelUser, {
            where: {
                user_id
            }
        })

        //DETELE
        // User.destroy({where})

        // res.status(200).send("Update user");
        successCode(res, modelUser, "Update thành công")
    }
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res, "Lỗi BE");


    }
}

module.exports = {
    getUser,
    createUser,
    updateUser
}