#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  console.log('=========');
  console.log(req.headers);
  // if(req.url == 'favicon.ico') return;
  var fileName = __dirname + req.url;
  //console.log(fileName);
  fs.readFile(file,(err,data)=>{
    if(err){
      console.log(err.message);
      res.statusCode = 404;
      res.end(err.message);
    }else{
      res.end(data);
    }
  });
  
}).listen(8080);
