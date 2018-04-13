'use strict';
module.exports = (sequelize, DataTypes) => {
    var Group = sequelize.define('Group', {
        name: DataTypes.STRING
    });

    Group.showOne = function (id) {
    	return Group.findById(id).then(group => {
		 	return group;
		});
    };

    Group.showAll = function () {
		return Group.findAll({ attributes: ['id', 'name'] }).then(groups => {
		    return groups;
		});
    };

    return Group;
};