var fs = require('fs');
var merge = require('../bap/utils/merge');
var su = require('../bap/utils/string');
var Jef = require('json-easy-filter');

var d1 = {
    a1 : [
            3, 4
    ],
    a2 : {
        a3 : 5,
        a4 : [
                1, 3
        ],
        a5 : [
                4, 3
        ],
        a6 : {
            a7 : 1,
            a8 : 3,
            a9 : 5
        }
    },
    a8 : 5,
    a9 : [
            1, 2
    ]
};
var d2 = {
    a1 : 2,
    a2 : {
        a3 : 4,
        a4 : 8,
        a6 : {
            a7 : [
                2
            ],
            a8 : [],
            a9 : {}
        }
    },
    a9 : 'a'
};

var res = merge(d1, d2, function (context) {
    if (context.conflict && context.src.hasType('number', 'array') && context.dst.hasType('number', 'array')) {
        var arr1 = context.src.type() == 'array' ? context.src.value : [
            context.src.value
        ];
        var arr2 = context.dst.type() == 'array' ? context.dst.value : [
            context.dst.value
        ];
        var sum = 0;
        for (var i = 0; i < arr1.length; i++) {
            var val = arr1[i];
            if (typeof val === 'number') {
                sum += val;
            }
        }
        for (var i = 0; i < arr2.length; i++) {
            var val = arr2[i];
            if (typeof val === 'number') {
                sum += val;
            }
        }
        context.update(sum);
    } else {
        context.useDefault();
    }
});
console.log(su.pretty(res.value));