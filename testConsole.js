var fs = require('fs');
var utils = require('util');
var multimatch = require('multimatch');

var fd = fs.openSync('/usr/bin/gcov-4.8', 'r');
var buffer = new Buffer(4);
var s = fs.readSync(fd, buffer, 0, 4, null);
console.log(buffer);

var buffer2 = new Buffer(4);
fs.readSync(fd, buffer2, 0, 4, 0);
console.log(buffer2);

console.log(buffer.equals(buffer2));