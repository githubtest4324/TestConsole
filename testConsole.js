var su = require('../bap/utils/string');

arrayToLineStr = function (arr) {
    var res = '[\n';
    var i = 0;
    arr.forEach(function (item) {
        res+=('\t'+item + '\n');
        i++;
    });
    res+=']';
    return res;
};

console.log(arrayToLineStr(['a', 'b']));