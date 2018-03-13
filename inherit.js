var addSplitChar = function(name, size){
    var size = size || 50;
    var name = name || "";

    var str = [];
    for (var i = 0; i < size; i++){
        str.push("=")
    }
    var str2 = new String(str.join(""));
    
    console.log(str2 + name + str2);
};

//class inherit
//notic: this way can't pass arguments to parent's constructor
addSplitChar("class inherit");
(function(){
    function Parent(name) {
        this.name = name || 'Adam';
    }

    Parent.prototype.say = function () {
        return this.name;
    }

    function Child (name) {
    }

    function inherit(C, P) {
        C.prototype = new P();
    }

    inherit(Child, Parent);

    var child = new Child("jack");

    console.log(child);
    console.log(child.say());


})();

//class inherit with constructor
//notice: 1, just inherit these subject had been add to parent(this) scop
//        2, it's can't inherit subjects which been added to parent.prototype
addSplitChar("class inherit with constructor");
(function(){
    function Parent(name) {
        var sign = true;
        this.name = name || "Adam";
    }

    Parent.prototype.say = function () {
        return this.name;
    }

    function Child(a, b, c, d) {
        Parent.apply(this, arguments);
    }

    var child = new Child("jack");
    console.log(child);

})();

//calss multi inherit
addSplitChar("calss multi inherit");
(function(){
    function Cat() {
        this.legs = 4;
        this.say = function () {
            return "wo wo wo" + this.legs;
        }
    }

    function Bird() {
        this.winds = 2;
        this.fly = true;
    }

    function CatWings() {
        Cat.apply(this);
        Bird.apply(this);
    }

    var june = new CatWings();

    console.log(june);
    console.log(june.say())
})();

//class inherit with borrow and set prototype
addSplitChar("class inherit with borrow and set prototype");
(function(){
    function Parent(name) {
        var sign = true;
        this.name = name || "Adam";
    }

    Parent.prototype.say = function () {
        return this.name;
    }

    function Child(a, b, c, d) {
        Parent.apply(this, arguments);
    }

    Child.prototype = new Parent();

    var child = new Child();
    console.log(child);
    console.log(child.say());
})();


//class inherit with shared method
addSplitChar("class inherit with shared method");
(function(){
    function Parent(name) {
        this.name = name || 'Adam';
    }

    Parent.prototype.say = function () {
        return this.name;
    }

    function Child (name) {
    }

    function inherit(C, P) {
        C.prototype = P.prototype;
    }

    var child = new Child();
    console.log(child);

})();

// class inherit with tmp construct function
addSplitChar("class inherit with tmp construct function");
(function(){
    function Parent(name) {
        this.name = name || 'Adam';
    }

    Parent.prototype.say = function () {
        return this.name;
    }

    function Child (name) {
    }

    function inherit(C, P) {
        var F = function(){};
        F.prototype = P.prototype;
        C.prototype = new F();
        C.uber = P.prototype; //lick as super class
        C.prototype.constructor = C; //repoint constructor
    }

    function inherit2(C, P) {
        var F = function () {};
        return function (C, P) {
            F.prototype = P.prototype;
            C.prototype = new F();
            C.uber = P.prototype;
            C.prototype.constructor = C;
        }
    }

    inherit(Child, Parent);

    var child = new Child();
    console.log(child);

    addSplitChar("inherit2", 10);

    inherit2(Child, Parent);

    var child = new Child();
    console.log(child);

})();

//class inherit with prototype
addSplitChar("class inherit with prototype");
(function(){
    var Parent = {
        name: "Papa"
    }

    function object(o){
        function F() {};
        F.prototype = o;
        return new F();
    }

    var child = object(Parent);

    console.log(child);
    console.log(child.name);

})();

//class inherit with copy property
addSplitChar("class inherit with copy property");
(function(){
    function extend(parent, child) {
        var i;
        child = child || {};
        for (i in parent) {
            if (parent.hasOwnProperty(i)) {
                chilc[i] = parent[i];
            }
        }

        return child;
    }

    function extendDeep(parent, child) {
        var toString = Object.prototype.toString,
            astr = "[Object Array]",
            child = child || {};
        for (i in parent) {
            if (parent.hasOwnProperty(i)) {
                if (typeof parent[i] === "Object") {
                    child[i] = toString.call(parent[i] === astr ? []:{});
                    extendDeep(parent[i], child[i]);
                }
                else {
                    child[i] = parent[i];
                }
            }
        }
    }
})();

//mix method
addSplitChar("mix method");
(function(){
    function mix(){
        var arg, prop, child = {};
        for (arg = 0; arg < arguments.length; arg += 1) {
            for (prop in arguments[arg]) {
                if (arguments[arg].hasOwnProperty(prop)) {
                    child[prop] = arguments[arg][prop];
                }
            }
        }
        return child;    
    }
    
    var cake = mix(
        {eggs:2, large: true},
        {butter: 1, salted: true},
        {flour: '3 cups'},
        {suger: "sure!"}
    );

    console.log(cake);
    
    
})();
