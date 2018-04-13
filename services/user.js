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
    }).catch(function (e) {
        console.log(e);
        return {error: e};
    });
};

exports.getUsers = function(){
    return models.User.findUsers().then(function(users){
        return users;
    })
};

exports.getUser = function(idUser){
    return models.User.findUser(idUser).then(function(user){
        return user;
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
        }).catch(function (e) {
            console.log(e);
            return {error: e};
        });
};

exports.deleteUser = function(idUser){
    return models.User.destroy({
        where:{
            id: idUser
        }
    }).catch(function (e) {
        console.log(e);
        return {error: e};
    });
};