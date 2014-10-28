var su = require('../bap/utils/string');
var sample1 = require('../json-easy-filter/tests/sampleData1.js');
var traverse = require('json-easy-filter').traverse;
var merge = require('../bap/utils/merge');
var JefNode = require('json-easy-filter').JefNode;
var nodeUtils = require('util');
var sprintf = require('sprintf-js').sprintf;

console.log(su.format('%04d', Math.floor(Math.random()*9999)));
