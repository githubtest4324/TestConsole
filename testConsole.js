var su = require('../bap/utils/string');
var sample1 = require('../json-easy-filter/tests/sampleData1.js');
var traverse = require('json-easy-filter').traverse;
var merge = require('../bap/utils/merge');
var JefNode = require('json-easy-filter').JefNode;
var ejs = require('ejs');
var fs = require('fs');

var template = ejs.compile(fs.readFileSync(__dirname + "/test.ejs", "utf8"), {
    open : '|',
    close : '|'
});

console.log(template({
    user : {
        name : 'liviu'
    }
}));