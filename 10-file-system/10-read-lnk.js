#!/usr/bin/node 

const fs = require('fs'),
      src = process.argv[2];

if(typeof(src) === 'undefined' || process.argv.length){
  console.error('命令行参数错误！');
  process.exit(1);
}

try{
  console.log(src,'->',fs.readlinkSync(src));
}catch(e){
  console.error(e.message);
  process.exit(2);
}
