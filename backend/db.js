const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

let _db = null;

function initDB() {
    if (_db) {
        console.warn("Trying to init DB again!");
        return _db;
    }

    _db = new Sequelize(
        dbConfig.dbName,
        dbConfig.dbUsername,
        dbConfig.dbPassword,
        {
            host: dbConfig.dbHostname,
            dialect: 'postgres',
            logging: false
        }
    );

    console.log('db initialized')
    return _db;
}

function getDB() {
    if (!_db) {
        // console.log("DB has not been initialized. Initializing new Connection.");
        initDB()
    }
    return _db;
}


module.exports = {
    getDB
}