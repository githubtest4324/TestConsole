var su = require('../bap/utils/string');
var sample1 = require('../json-easy-filter/tests/sampleData1.js');
var traverse = require('json-easy-filter').traverse;
var merge = require('../bap/utils/merge');
var JefNode = require('json-easy-filter').JefNode;

var C1 = function () {
    this.a = 2;
};
var C2 = function () {
    this.b = 3;
}
//C2.prototype = Object.create(C1.prototype);
C2.prototype = new C1( );

var c = new C2();
console.log(c.a);
console.log(c instanceof C1);