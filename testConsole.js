var su = require('../bap/utils/string');

var Jef = require('json-easy-filter');

var root = new Jef({
    "a1" : {
        "a2" : 1
    },
    "a2" : "conflict",
    "a3" : "conflict",
    "a5" : {
        "a6" : "a",
        "a8" : 2
    }
});

var node = root.get('a5');
node.value['a6'] = 'conflict';
node.refresh();

console.log(root.print());

