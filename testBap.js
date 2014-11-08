var su = require('../bap/utils/string');
var fs = require('fs');

var Bap = require('bap').Bap;

var bap = new Bap([
    {
        name : 'f1',
        dsl : {
            config : {
                rootFolder : 'genRoot/',
                generators : [
                    'entityJava'
                ],
                entityJava : {
                    sourceDir : 'src/java/'
                }
            },
            ns1 : {
                E1 : {
                    model : true,
                    type : 'entity',
                    properties : {
                        p1 : 'str',
                        p2 : {
                            properties : {
                                p2_1 : 'str'
                            }
                        },
                        p3 : '[int]',
                        p4 : {
                            type : 'str'
                        },
                        p5 : {
                            type : '[int]'
                        },
                        p6 : {
                            name : 'E3',
                            properties : {
                                p3 : 'str'
                            }
                        },
                        p7 : {
                            type : {
                                name : 'E4',
                                properties : {
                                    p7_E4 : 'str'
                                }
                            }
                        }
                    }
                },
                Rest1 : {
                    type : 'rest',
                    input : {
                        model : true,
                        name : 'Rest1Request',
                        type : '[E1]',
                    },
                    output : {
                        model : true,
                        type : 'str'
                    }
                },
                Rest2 : {
                    type : 'rest',
                    input : {
                        model : true,
                        properties : {
                            p4 : '[E1]',
                            p5 : 'str'
                        }
                    },
                    output : {
                        model : true,
                        type : '[str]',
                    }
                },
                Page1 : {
                    type : 'page',
                    model : {
                        mdodel : true,
                        properties : {
                            p5 : 'str',
                            p6 : {
                                properties : {
                                    p7 : 'E1',
                                    p8 : 'str'
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
console.log(bap.printModel());
console.log(bap.log.toStringArray());


var bapModel = bap.dsl.filter(function (node) {

    if (node.meta.modelEntity && node.meta.modelProperty) {
        // Inline entity
        var prop = node.meta.modelProperty;
        var type;
        if (bap.model.isList(prop)) {
            type = su.format("list(%s)", bap.model.baseType(prop));
        } else {
            type = prop.type;
        }
        return su.format("Inline Entity: property: %s, entity: %s, dslPath: %s", type, node.meta.modelEntity.qualifiedName, node.path);
    } else if (node.meta.modelEntity) {
        // Entity
        return su.format("Entity: qn: %s, dslPath: %s", node.meta.modelEntity.qualifiedName, node.path);
    } else if (node.meta.modelProperty) {
        // Property
        var prop = node.meta.modelProperty;
        var type;
        if (bap.model.isList(prop)) {
            type = su.format("list(%s)", bap.model.baseType(prop));
        } else {
            type = prop.type;
        }
        var entity = bap.model.getPropEntity(prop);
        return su.format("Property: type: %s, parent entity: %s, dslPath: %s", type, entity.qualifiedName, node.path);
    }
});
console.log(su.pretty(bapModel));