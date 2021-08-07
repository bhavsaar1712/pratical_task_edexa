var express=require('express');
global.app=express();
global.router = express.Router();
const mime = require('mime/Mime');
var path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
global.connect = require("../EDEXA_TASK/lib/db_helper");
global.helper= require('../EDEXA_TASK/utils/helper.js');
// app.use("/api/v1",require('./routes/routes.js'));
var server =app.listen(8800);
 server.on('listening', onListening);
 server.setTimeout(50000);
 app.use("/api",require('./app/users/userroutes.js'));
function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.info(__filename, 'onListening', 'Listening on ' + bind);
  }
 