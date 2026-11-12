const http = require('http');
const moduleOne = require('./module.js');
const fs = require('fs'); //

http.createServer((req, res) => {
    fs.readFile('./home.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Không tìm thấy file!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
}).listen(moduleOne.port, moduleOne.hostname, () => {
    console.log(`Server running at http://${moduleOne.hostname}:${moduleOne.port}/`);
});