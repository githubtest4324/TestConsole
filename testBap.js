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
                    conf1 : 'conf1'
                }
            },
            ns1: {
                E1: {
                    type: 'entity',
                    properties: {
                        p1: 'str',
                        p2: {
                            type: 'entity',
                            properties: {
                                p3: 'str'
                            }
                        }
                    }
                },
                Rest1: {
                    type: 'rest',
                    input: 'E1',
                    output: {
                        type: 'str'
                    }
                },
                Rest2: {
                    type: 'rest',
                    input: {
                        properties: {
                            p4: 'E1',
                            p5: 'str'
                        }
                    },
                    output: {
                        type: 'list',
                        itemType: 'str'
                    }
                },
                Page1: {
                   type: 'page',
                   model: {
                       properties:{
                           p5: 'str',
                           p6: {
                               properties: {
                                   p7: 'E1',
                                   p8: 'str'
                               }
                           }
                       }
                       
                   }
                }
            }
            
        }
    }
]);

bap.generate();
console.log(bap.log.toStringArray());
// console.log(bap.printMeta());
// console.log(su.pretty(bap.config.value));
console.log(bap.printGenerators());
