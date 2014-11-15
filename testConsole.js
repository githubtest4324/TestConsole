var fs = require('fs');
var utils = require('util');
var compdir = require('compare-folders');
var multimatch = require('multimatch');

console.log(multimatch('a2.txt', 'a*.txt'));

function getFilesizeInBytes (filename) {
    var stats = fs.statSync(filename)
    var fileSizeInBytes = stats["size"]
    return fileSizeInBytes
};
console.log(getFilesizeInBytes('/media/data/f/temp/00/dir2/a4.txt'));

var res = compdir.compareSync('/media/data/f/temp/00/dir1', '/media/data/f/temp/00/dir2');
debugger;
var tab = function (tabs) {
    var res = '';
    while (tabs--) {
        res += '\t';
    }
    return res;
};

console.log('');
res.forEach(function (c) {
    var state;
    switch (c.state) {
    case 'equal':
        state = '=';
        break;
    case 'left':
        state = '->';
        break;
    case 'right':
        state = '<-';
        break;
    case 'distinct':
        state = '!=';
        break;
    default:
        state = '?';
    }
    var p1 = c.name1 ? c.name1 : '';
    var p2 = c.name2 ? c.name2 : '';
    var type1 = c.type1 ? c.type1 : 'missing';
    var type2 = c.type2 ? c.type2 : 'missing';
    console.log(utils.format('%s%s(%s)%s%s(%s)', tab(c.level), p1, type1, state, p2, type2));
});