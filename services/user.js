const models = require('../models');

exports.createUser = function(params){
    return models.User.create({
        firstName: params.firstName,
        lastName: params.lastName,
        mail: params.mail,
        password: params.password,
        age: params.age,
        city: params.city,
        address: params.address
    }).then(function(user){
        if(user !== undefined){
            user.dataValues.created = true;
            return user.dataValues;
        }else{
            return {created: false}
        }
    });
};

exports.getUsers = function(){
    return models.User.findUsers().then(function(users){
        if(users !== undefined){
            return users;
        }else{
            return {};
        }
    })
};

exports.getUser = function(idUser){
    return models.User.findUser(idUser).then(function(user){
        if(user !== undefined){
            return user;
        }else{
            return {};
        }
    })
};

exports.updateUser = function(idUser, params){
    return models.User.update(
        {
            firstName: params.firstName,
            lastName: params.lastName,
            mail: params.mail,
            password: params.password,
            age: params.age,
            city: params.city,
            address: params.address
        },{
            where: {
                id: idUser
            }
        });
};

exports.deleteUser = function(idUser){
    return models.User.destroy({
        where:{
            id: idUser
        }
    });
};