const http=require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server=http.createServer((req,res)=>{

res.statusCode=200;
res.setHeader('content-type','text/plain','keep-alive','myserver.com');
res.end('hello,world!');



});

server.listen(port, hostname,()=>{

console.log('happy server');
console.log(`Server running at http://${hostname}:${port}/`);

});