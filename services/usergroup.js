const models = require('../models');

exports.getUsers = function(params) {
    return models.UserGroup.getUsers(params.id);
}

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
}