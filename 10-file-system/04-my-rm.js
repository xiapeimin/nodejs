#!/usr/bin/node 

const fs = require('fs'),
      file = process.argv[2] || __filename;
if(fs.existsSync(src)){
  fs.unlinkSyns(src);
}else{
  console.error('%s not exist!',src);
  process.exit(1);
}
