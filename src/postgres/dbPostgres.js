const promise = require('bluebird');
const initOptions = {
    // pg-promise initialization options...

    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log('Connected to database:', cp.database);
    }

};
const options = {
    // Initialization Options
    promiseLib: promise
  };
var pgp = require("pg-promise")(options);
const {localPsql} =require('../keys');
var db = pgp(localPsql); //inicializamos pg-promises
module.exports = db;

