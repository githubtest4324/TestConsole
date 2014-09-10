module.exports = {
    ns1 : {
        rest1 : {
            type : 'rest',
            url : 'url1',
            input : 'str',
            output : {
                type : 'list',
                itemType : 'str'
            }
        },
        rest2 : {
            type : 'rest',
            url : 'url2',
            p3 : 'p3',
            input : {
                type : 'entity',
                properties : {
                    f1 : 'str'
                },
                p2 : 'p2',
            },
            output : {
                type : 'entity',
                p1 : 'p1',
                properties : {
                    f1 : {
                        type : 'entity',
                        properties : {
                            f2 : 'str'
                        }
                    }
                }
            }
        },
        rest3 : {
            type : 'rest',
            url : 'url3',
            input : 'string',
            output : true
        },
        rest4 : {
            type : 'rest',
            url : 'url3',
            input : 100
        },
        rest5 : {
            type : 'rest',
        },
        rest6: {
            type: 'rest',
            url: 'url4',
            input: {
                properties : {
                    f1 : 'str'
                }
            }
        }
        
        
    }
};