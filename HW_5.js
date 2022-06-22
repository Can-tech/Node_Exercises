const http = require('http');
const { createServer } = require('tls');


const server = http.createServer((req,res)=>{

    const url = req.url;

    if(url=="/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Ana Sayfa");
    }else if(url=="/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("About Us")
    }else if(url=="/contact"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Contact");
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("Sayfa bulunamadi");
    }

    res.end();
})
const port = 5000;
server.listen(port, ()=>{console.log(`Port ${port} atandı.` )})
