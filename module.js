/*
function showNotify(){
    console.log('Hello module');
}
const hostname ='127.0.0.1';
const port = 1500;
module.exports.showNotify=show;
module.exports.hostname=hostname;
module.exports.port=port;
*/
//or
const hostname='127.0.0.1';
const port=1500;
module.exports={
    show: function showNotify(){
        console.log('Hello world');
    },
    hostname: hostname,
    port: port 
}

//or

/*
module.exports={
   show: function (){
       console.log('Hello modulle');
   },
   hostname: '127.0.0.1',
   port: 1500;
}
*/