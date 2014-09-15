var jst = require('./JsType');

var C = function(id){
    var priv = {}, pub = {};
    priv.id = id;
    
    pub.getId = function(){
        return priv.id;
    };
    
    pub.setId = function(val){
        priv.id = val;
    };
    pub.toString = function(){
        console.log(priv.id);
    };
    return pub;
};

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var D = function(id, name){
    var priv = {};
    var sup = C(id); 
    var pub = object(sup);
    priv.name = name;
    
    pub.getName = function(){
        return priv.name;
    };
    
    pub.toString = function(){
        console.log(pub.getId());
        console.log(priv.name);
    };

    pub.toString2 = function(){
        sup.toString();
    };
    
    return pub;
};


var c = new D(3, 'liv');
c.setId(5);
c.toString2();
