var fs = require('fs');
var Bap = require('bap');

var dsl1 = {
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
var dsl2 = {
    a1 : {
        b1 : 'b1-',
        b2 : {
            c1 : 'c1-',
            c2 : 'c2-',
            c3 : 'c3',
            c4 : {
                d1 : 'd1'
            }
        }
    },
    a2 : 'a2-',
    a3 : {
        b1 : 'b1'
    },
    a4 : 'a4',
    a5 : {
        b1 : 'b1'
    }
};
var bap = new Bap([
        {
            name : 'dsl1',
            dsl : dsl1
        }, {
            name : 'dsl1',
            dsl : dsl1
        }
]);
var result = bap.generate();

console.log(result.toString());
console.log(result.errorsToStringArray());
