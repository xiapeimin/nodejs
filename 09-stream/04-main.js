#!/usr/bin/node

const GreenString = require('./04-green-stream.js'),
      stdin = process.stdin;

var g = new GreenString();

stdin.resume();
stdin.pipe(g);
