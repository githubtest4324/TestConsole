var fs = require('fs');

var Bap = require('bap');

var f1 = require('./f1');

var bap = new Bap([
   				{
   					fileName : 'f1',
   					content : f1
   				}
   		]);
var result = bap.compile();

console.log(result.toString());
console.log(result.errorsToStringArray());
