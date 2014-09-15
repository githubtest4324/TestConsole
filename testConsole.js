var jst = require('./JsType');

var x = {
    a : 'a',
    arr : [
            'b', {
                d : 'd',
                e : 'e'
            }
    ]
};

var data = {
    x : {
        a : {
            b : 'b'
        },
        y : undefined,
        c : 'c',
        arr : [
                'd', undefined
        ]
    },
    z : undefined,
    t : undefined
};
data.z = data.x;
data.x.y = data.z;
data.t = data.z;
data.x.arr[1] = data.t;

var seenObjects = [];

var traverse = function (key, val, parent, isRoot, path, level) {
    var isArray = val instanceof Array;
    var isObject = typeof val === 'object' && !isArray;

    // Leaf
    var isLeaf = false;
    if (!(isObject || isArray)) {
        isLeaf = true;
    }

    // Circular
    var isCircular = false;
    if (seenObjects.indexOf(val) !== -1) {
        isCircular = true;
    } else {
        seenObjects.push(val);
    }

    console.log('key: ' + key + ', isRoot: ' + isRoot + ', isLeaf: ' + isLeaf + ', level: ' + level + ', isCircular: ' + isCircular + ', path: ' + path);
    if (!isCircular) {
        if (isObject) {
            for ( var childKey in val) {
                newPath = path.concat([
                    childKey
                ]);
                traverse(childKey, val[childKey], val, false, newPath, level + 1);
            }
        }
        if (isArray) {
            for (var i = 0; i < val.length; i++) {
                var childKey = '' + i;
                newPath = path.concat([
                    childKey
                ]);
                traverse(childKey, val[i], val, false, newPath, level + 1);
            }
        }
    }
};

traverse(undefined, data, undefined, true, [], 0);
