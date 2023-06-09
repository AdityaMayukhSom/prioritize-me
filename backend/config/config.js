const dotenv = require('dotenv')
dotenv.config()

const port = parseInt(process.env.PORT) || 8080;
const dbName = process.env.POSTGRES_DATABASE_NAME;
const dbUsername = process.env.POSTGRES_DATABASE_USERNAME
const dbPassword = process.env.POSTGRES_DATABASE_PASSWORD
const dbHostname = process.env.POSTGRES_DATABASE_HOSTNAME

module.exports = {
    port,
    dbName,
    dbUsername,
    dbPassword,
    dbHostname
}