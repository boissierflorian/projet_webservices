'use strict';

var models = require('../models');

function createGroup(params) {
    if (typeof(params) !== 'object' || !params.name) {
        console.log("Paramètres incorrects");
        return [];
    }

    return models.Group.create({
        name : params.name
    }).catch(function(e){
        return {error : e};
    });
}

function updateGroup(params) {
    return models.Group.update({
        name : params.name
    },{
        where : {
            id : params.id,
        }
    }).catch(function(e){
        return {error : e};
    });
}

function deleteGroup(params) {
    return models.Group.destroy({
        where : {
            id : params.id
        }
    }).catch(function(e){
        return {error : e};
    })
}

function getGroup(params) {
    return models.Group.showOne(params.id).catch(function(e){
        return {error : e};
    });
}

function getGroups() {
    return models.Group.showAll().catch(function(e){
        return {error : e};
    });
}

module.exports.createGroup = createGroup;
module.exports.updateGroup = updateGroup;
module.exports.deleteGroup = deleteGroup;
module.exports.getGroups = getGroups;
module.exports.getGroup = getGroup;