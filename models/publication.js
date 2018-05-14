'use strict';

module.exports = (sequelize, DataTypes) => {
    var Publication = sequelize.define('Publication', {
        content: DataTypes.STRING,
        id_user : {
            type: DataTypes.INTEGER,
            references : {
                model: "Users",
                key: "id"
            }
        }
    });

    Publication.showOne = function (id) {
        return Publication.findById(id).then(publication => {
            return publication ? publication : [];
        }).catch(function (e) {
            return {error : e};
        });
    };

    Publication.showAll = function () {
        return Publication.findAll({ attributes: ['id', 'content', 'id_user'] }).then(publications => {
            return publications;
        }).catch(function (e) {
            return {error : e};
        });
    };

    Publication.getOneUserPublication = function(userId, publicationId) {
        return Publication.findOne({where : {id_user : userId, id : publicationId}}).then(publication => {
            return publication ? publication : [];
        }).catch(function(e) {
            return {error : e};
        });
    }

    Publication.getAllUserPublications = function(userId) {
        return Publication.findAll({where : {id_user : userId}}).then(publications => {
            return publications ? publications : [];
        }).catch(function(e) {
            return {error : e};
        });
    }

    return Publication;
};