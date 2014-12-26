var fs = require('fs');
var utils = require('util');
var multimatch = require('multimatch');


var x = 'XX'.localeCompare('Xx', { sensitivity: 'base' });
console.log(x);