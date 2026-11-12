const http = require('http');
const moduleOne = require('./module/module.js');
const fs = require('fs'); 
const url=require('url');
function onRequest(req,res){
    const path=url.parse(req.url).pathname;
    console.log(path);
    if(path=='/'){
        fs.readFile('./template/home.html', (err, data) => {
           if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Không tìm thấy file!');
            return;
           }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
        });
    }else if(path=='/depscri.html'){
        fs.readFile('./template/depscri.html', (err, data) => {
           if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Không tìm thấy file!');
            return;
           }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
        });
    }
}
http.createServer(onRequest).listen(moduleOne.port, moduleOne.hostname, () => {
    console.log(`Server running at http://${moduleOne.hostname}:${moduleOne.port}/`);
});