'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
        city: DataTypes.STRING,
        address: DataTypes.STRING
    });

    User.findUsers = function () {
        return User.findAll().then(users => {
            var datas = [];
            users.forEach(user => {
                datas.push(user.dataValues)
            });
            return (users === null) ? [] : datas;
        }).catch(function (e) {
            console.log(e);
            return [];
        });
    };

    User.findUser = function (idUser) {
        return User.findOne({
            where: {
                id: idUser
            }
        }).then(user => {
            return (user === null) ? [] : user.dataValues;
        }).catch(function (e) {
            console.log(e);
            return [];
        })
    };
    return User;
};