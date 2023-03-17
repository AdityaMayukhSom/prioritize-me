const log = require('log-to-file')

const serverLogRelativePath = './logs/server.log';
const databaseLogRelativePath = './logs/database.log';

/**
 * This function takes the string to be logged and logs it into database.log
 * @arguments
 * @param {string} databaseLogString - the database related record to be logged
 */
function databaseLogger(databaseLogString) {
    log(databaseLogString, databaseLogRelativePath)
}

/**
 * This function takes the string to be logged and logs it into server.log
 * @arguments
 * @param {string} serverLogString - the server related record to be logged
 */
function serverLogger(serverLogString) {
    log(serverLogString, serverLogRelativePath)
}


module.exports = {
    databaseLogger,
    serverLogger
}

