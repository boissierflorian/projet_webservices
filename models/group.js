'use strict';
module.exports = (sequelize, DataTypes) => {
    var Group = sequelize.define('Group', {
        name: DataTypes.STRING
    });

    Group.showOne = function (id) {
    	return Group.findById(id).then(group => {
		 	return group ? group : [];
		}).catch(function (e) {
            return {error : e};
        });
    };

    Group.showAll = function () {
		return Group.findAll({ attributes: ['id', 'name'] }).then(groups => {
		    return groups;
		}).catch(function (e) {
            return {error : e};
        });
    };

    return Group;
};