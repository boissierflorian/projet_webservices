const models = require('../models');

exports.getUsers = function(params) {
    return models.UserGroup.getUsers(params.id);
};

exports.deleteUserFromGroup = function(params) {
    return models.UserGroup.destroy({
        where : {
            id_group : params.groupId,
            id_user : params.userId
        }
    }).catch(function(e){
        console.log(e);
        return {error : e};
    });
};

exports.addUserToGroup = function(params){
    return models.UserGroup.create({
        id_user: params.userId,
        id_group: params.groupId
    }).then(function(userGroup){
        if(userGroup !== undefined){
            userGroup.dataValues.created = true;
            return userGroup.dataValues;
        }else{
            return {created: false}
        }
    }).catch(function (e) {
        console.log(e);
        return {error: e};
    });
};