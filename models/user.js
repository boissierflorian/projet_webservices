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


    return User;
};