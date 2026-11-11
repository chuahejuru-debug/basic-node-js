const http =require('http');
const moduleOne=require('./module.js');
moduleOne.show();
const server = http.createServer((req,res)=>{
    res.statusCode = 200;  
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
});
server.listen(moduleOne.port,moduleOne.hostname,()=>{
    console.log(`Server running at http://${moduleOne.hostname}:${moduleOne.port}/`);
});