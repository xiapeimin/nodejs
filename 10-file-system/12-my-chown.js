#!/usr/bin/node

const fs = require('fs'),
      uid = process.argv[2],
      git d = process.argv[3],
      file = process.argv[4];

if(process.argv.length != 5){
  console.log('命令行参数不正确');
  process.exit(1);
}

try{
  fs.chownSync(file,Number(uid),Number(gid)catch(e){
  console.log(e.message);
  process.exit(2);
}
