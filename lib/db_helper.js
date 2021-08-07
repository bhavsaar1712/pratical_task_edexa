const { promisify } = require('util');
const env = require('../config/config.js');
var con = module.exports = require('mysql').createConnection({
    host     : env.host,
    user     : env.user,
    password : env.password,
    database : env.database,
    port :'3306'
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log(" Connected DB HELPER Connected!");
  })
con.query = promisify(con.query);

  