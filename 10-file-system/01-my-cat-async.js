#!/usr/bin/node 

const fs = require('fs'),
      file = process.argv[2] || __filename;
fs.readFile(file,function(err,data){
  if(err){
    console.log(err.message);
    process.exit(1);
  }else{
    console.log(data.toString('utf-8'));
  }
  //console.log(data.toString('utf-8'));
});


