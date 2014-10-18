var su = require('../bap/utils/string');
var fs = require('fs');

var Bap = require('bap').Bap;

var bap = new Bap([
    {
        name : 'f1',
        dsl : {
            config : {
                generators : [
                    'restJava'
                ],
                rest_java : {
                    conf1: 'conf1'
                }
            }
        }
    }
]);

bap.generate();
console.log(bap.log.toStringArray());
//console.log(bap.printMeta());
//console.log(su.pretty(bap.config.value));
console.log(bap.printGenerators());


