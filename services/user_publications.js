const models = require('../models');

exports.createUserPublication = function(userId, params) {
    return models.Publication.create({
        id_user : userId,
        content : params.content
    }).then(function(publication) {
        if (publication !== undefined) {
            publication.dataValues.created = true;
            return publication.dataValues;
        } else {
            return {created: false};
        }
    }).catch(function(e) {
        console.log(e);
        return {error: e};
    });
}

exports.getUserPublications = function(userId) {
    return models.Publication.getAllUserPublications(userId).catch(function(e){
        return {error : e};
    });
}

exports.getUserPublication = function(userId, publicationId) {
    return models.Publication.getOneUserPublication(userId, publicationId).catch(function(e) {
        return {error : e};
    })
}

exports.updateUserPublication = function(userId, publicationId, params) {
    return models.Publication.update({
        content : params.content
    }, {
        where : {
            id_user : userId,
            id : publicationId
        }
    }).catch(function(e) {
        console.log(e);
        return {error : e};
    })
}

exports.deleteUserPublication = function(userId, publicationId) {
    return models.Publication.destroy({
        where : {
            id_user : userId,
            id : publicationId
        }
    }).catch(function(e) {
        console.log(e);
        return {error : e};
    });
}