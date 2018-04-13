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

    UserGroup.getUsers = function(groupId) {
        return UserGroup.findAll({where: { id_group : groupId }, attributes: ['id_user']}).then(users => {
            var usersIDs = [];
            
            users.forEach(user => {
                usersIDs.push(user.id_user);
            });

            return usersIDs;
        })
        .catch(function(e) {
            console.log(e);
            return [];
        });
    }

    return UserGroup;
};