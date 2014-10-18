var su = require('../bap/utils/string');
var sample1 = require('../json-easy-filter/tests/sampleData1.js');
var traverse = require('json-easy-filter').traverse;
var merge = require('../bap/utils/merge');
var JefNode = require('json-easy-filter').JefNode;

var Class = require('class.extend');

var C1 = Class.extend({
    a1: 'a1',
    init : function(){
        console.log('init C1');
    }
});

var C2 = function(p1){
  var instance = C1.extend({
      a2: 'a2',
      init3 : function(){
          //this._super();
          console.log('init C2');
      },
      init2 : function(){
          this._super();
          console.log('init C2 2');
      }
  });  
  return new instance();
};


//var C3 = C2.extend({
//    a3: 'a3',
//    init : function(){
//        C2.apply(this, arguments);
//        console.log('init C3');
//    }
//});

var c = new C2(4);

//c2.printP1();
console.log(c.a1);