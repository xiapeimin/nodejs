#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  console.log('============');
  console.log(req.headers);

  //if(req.url === '/favicon.ico') return;
  var fileName = __dirname + req.url;
  fs.readFile(file,(err,data) => {
    if(e){
      console.log(e.message);
      res.statusCode = 404;
      res.end(e.message);
    }else{
      res.end(data);
    }
  });
  //console.log(fileName);
  //res.end(fs.readFileSync(fileName).toString('utf8'));
//  console.log(req.headers);
}).listen(8080);

console.log(process.pid);
