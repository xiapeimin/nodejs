#!/usr/bin/node

const Readable = require('./03-my-readable.js'),
      stdin = process.stdin;

var r = new Readable();

stdin.resume();
stdin.pipe(r);
