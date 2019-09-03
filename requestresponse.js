var http=require("http");
//console.log(http);

var server=http.createServer(function (req,res){
    if(req.url=='/')
    {
        res.writeHead(200
      );
        res.write("<html><body><p>home page</p></body></html>");
        res.end();
    }
    else if(req.url=='/login')
    {
        console.log(req.url);
        res.writeHead(200
      );
       
        res.write("<html><body><p>login page</p></body></html>");
        res.end();
    }
    else if(req.url=='/signup')
    {
        res.writeHead(200
        
      );
       
        res.write("<html><body><p>signup page</p></body></html>");
        res.end();
    }
else if(req.url=='./json')
{
    res.writeHead(200);
}



    else
    {
        console.log("invalid");
        res.end("invalid request");
    }

});
server.listen(5000);
console.log("server is running at port 5000");