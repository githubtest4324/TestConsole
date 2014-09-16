
var f1 = function(){
    var res = [];
    for(var i = 0; i<3; i++){
        var f = function(){
            console.log(i);
        };
        res.push(f);
    }
    
    return res;
};

var f2 = function(){
    var res = [];
    for(var i = 0; i<3; i++){
        var f = function(j){
            return function(){
                console.log(j);
            };
        }(i);
        res.push(f);
    }
    
    return res;
};

var x = f1();
x[0]();
x[1]();
x[2]();


// Output: 
// >> 3
// >> 3
// >> 3

var x = f2();
x[0]();
x[1]();
x[2]();


// Output: 
// >> 0
// >> 1
// >> 2
