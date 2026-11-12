const url=require('url');
const fs=require('fs');
function showHTML(path,res){
    fs.readFile(path,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write('File not found');
        }
        else{
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        }
        res.end();
    });
}
module.exports={
    onRequest: function onRequest(req,res){
    const path=new  URL(req.url, `http://${req.headers.host}`).pathname;
    switch(path){
        case '/':
            showHTML('./template/home.html',res);
            break;
        case '/depscri.html':
            showHTML('./template/depscri.html',res);
            break;
        default:
            res.writeHead(404);
            res.write('File not found!');
            res.end();
            break;
    }
}

}