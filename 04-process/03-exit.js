#!/usr/bin/node

const log = console.log,
      err = console.error,
      arg = process.argv[2];

if(typeof(arg) === 'uncdefined' || isNaN(Number(arg))){
  err('命令形参不正确')；
    process.exit(1);
}else{
  log('退出码，'，arg);
  process.exit(arg);
}


