var fs = require('fs');
var merge = require('../bap/utils/merge');
var su = require('../bap/utils/string');

var d1 = {
    a1 : {
        b1 : 'b1',
        b2 : {
            c1 : 'c1',
            c2 : 'c2'
        }
    },
    a2 : 'a2',
    a3 : 'a3'
};
var d2 = {
    a1: {
        b2: {
            c3: {
                d4: 'd4'
            }
        },
        b3: {
            c1: 'c1'
        }
    },
    a4 : 'a4'
};

var o = merge(d1, d2);
console.log(su.pretty(o.value));