var su = require('../bap/utils/string');
var sample1 = require('../json-easy-filter/tests/sampleData1.js');
var traverse = require('json-easy-filter').traverse;
var merge = require('../bap/utils/merge');
var JefNode = require('json-easy-filter').JefNode;
var ejs = require('ejs');
var fs = require('fs');
var async = require('async');
var sleep = require('sleep');



var x = function(done){
    process.nextTick(function(){
        for(var i = 0; i<5; i++){
            console.log('x'+i);
            sleep.sleep(1);
        }
        done();
    });
};
var y = function(done){
    process.nextTick(function(){
        for(var i = 0; i<5; i++){
            console.log('y'+i);
            sleep.sleep(1);
        }
        done()
    });
};
var z = function(done){
    process.nextTick(function(){
        for(var i = 0; i<5; i++){
            console.log('z'+i);
            sleep.sleep(1);
        }
//        done()
    });
};

async.parallel([x, y],function(){
    console.log('done');
});
z();


//var async_function = function(val){
//    process.nextTick(function(){
//        console.log(val)
//    });
//};
//
//async_function(42);

console.log('aici');
