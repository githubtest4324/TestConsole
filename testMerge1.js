var fs = require('fs');
var merge = require('../bap/utils/merge');
var su = require('../bap/utils/string');
var Jef = require('json-easy-filter');

var d1 = {
    a1 : 1,
    a2: 1,
    a3: {
        a4: 'a'
    },
    a5: {
        a6: 'a',
        a8: 2
    },
};
var d2 = {
    a1 : {
        a2 : 1
    },
    a2: 2,
    a3: 4,
    a5: {
        a6: 'b',
        a7: 'c'
    }
};

var res = merge(d1, d2, function (context) {
    if (context.conflict && context.src.hasType('number', 'string', 'boolean')) {
        if(context.src.key==='a6')debugger;
        context.update('conflict');
    } else {
        context.useDefault();
    }
});

//var res = merge(d1, d2, function (context) {
//    if (context.conflict && context.src.type() === 'number' && context.dst.type() === 'number') {
//        context.update(context.dst.value + context.src.value);
//    } else if (!context.conflict && context.src.type() === 'number') {
//        context.update(0);
//    } else {
//        context.useDefault();
//    }
//});
console.log(su.pretty(res.value));