const {conn} = require('../config/db');

module.exports = testConnection = async () => {
    const dbName = conn.getDatabaseName();

    try {
        await conn.authenticate();
        console.log(`Connection to ${dbName} has been established successfully.`);
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
}