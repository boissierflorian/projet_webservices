'use strict';
module.exports = (sequelize, DataTypes) => {
    var Group = sequelize.define('Group', {
        name: DataTypes.STRING
    });

    return Group;
};