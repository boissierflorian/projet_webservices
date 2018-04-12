'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var db        = {};
var fs = require('fs');
var configData = fs.readFileSync('config.json', 'utf8');
var databaseConfig = JSON.parse(configData);

var sequelize = new Sequelize(databaseConfig.database_name, databaseConfig.username, databaseConfig.password, databaseConfig);

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

sequelize.sync().then(
    () => {
        console.log("sequelize sync");
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;