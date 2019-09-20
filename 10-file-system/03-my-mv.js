#!/usr/bin/node 

const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3] || __filename;

try{
  fs.renameSync(src,dst);
}catch(e){
  console.error(e.message);
  process.exit(1);
}


