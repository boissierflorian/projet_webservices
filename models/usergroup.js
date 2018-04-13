'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserGroup = sequelize.define('UserGroup', { 
        id_user : {
            type: DataTypes.INTEGER,
            references : {
                model: "Users",
                key: "id"
            }
        },
        id_group : {
            type: DataTypes.INTEGER,
            references : {
                model: "Groups",
                key: "id"
            }
        },
    });

    return UserGroup;
};