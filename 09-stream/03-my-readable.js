#!/usr/bin/node

const Readable = require('stream').Readable;

var c = 'a'.charCodeAt(0);

var MyReadable = function(){
  Readable.call(this);
};

MyReadable.prototype = Readable.prototype;

//module.exports = MyReadable;

MyReadable.prototype._read = function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
};

var rs = new MyReadable();
rs.pipe(process.stdout);
