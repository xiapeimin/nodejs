#!/usr/bin/node 

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

//src.pip(dst)
//src = fs.createreadstream
//src = fs.createwritestream
fs.createReadStream(src).pipe(fs.createWriteStream(dst));
