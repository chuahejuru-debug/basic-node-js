const http = require('http');
const moduleOne = require('./module/module.js');
const helper=require('./module/helper.js');

http.createServer(helper.onRequest).listen(moduleOne.port);