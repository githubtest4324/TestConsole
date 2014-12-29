var utils = require('util');
var dircompare = require('dir-compare');
var res = dircompare.compareSync('/media/data/f/temp/00/dircompare/root/d1', '/media/data/f/temp/00/dircompare/root/d2', {compareSize: true});
console.log('equal: ' + res.equal);
console.log('distinct: ' + res.distinct);
console.log('left: ' + res.left);
console.log('right: ' + res.right);
console.log('differences: ' + res.differences);
console.log('same: ' + res.same);
res.diffSet.forEach(function (entry) {
    var state = {
        'equal' : '==',
        'left' : '->',
        'right' : '<-',
        'distinct' : '<>'
    }[entry.state];
    var name1 = entry.name1 ? entry.name1 : '';
    var name2 = entry.name2 ? entry.name2 : '';
    console.log(utils.format('%s(%s)%s%s(%s)', name1, entry.type1, state, name2, entry.type2));
});