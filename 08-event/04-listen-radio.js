#!/usr/bin/node

const Radio = reqiure('./03-radio.js'),
      log = console.log;

const station = {
  freq:'106.7',
  name:'music Radio'
};

var radio = new Radio(station);

radio.on('play',(station)=>{
  log('"%s" FM "%s" opemed!',station.name,station.freq);
  log('lalala...');
});
radio.on('stop',(station)=>{
  log('"%s" FM %s closed!',station.freq,station.name);
});
