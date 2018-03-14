var tools = require("./tools");
var addSplitChar = tools.prototype.addSplitChar;

//bind subject with array slice func
addSplitChar("bind subject with array slice func");
(function(){
    function f() {
        console.log(arguments);
        var args = [].slice.call(arguments, 1, 3);
        return args;
    }

    console.log(f(1, 2, 3, 4, 5, 6));
})();


//
addSplitChar("bind subject with borrow other object");
(function(){
    var one = {
        name : "object",
        say : function (greet) {
            return greet + " : " + this.name;
        }
    };

    var two = {
        name : "other object"
    };

    console.log(one.say("hi"));

    console.log(one.say.apply(two, ["hello"]));
    console.log(one.say.call(two, "hello"));

})();

//bind sample func
addSplitChar("bind sample func");
(function(){
    function bind(o, m) {
        return function () {
            return m.apply(o, [].slice.call(arguments));
        }
    }

    // var newFunc = obj.someFunc.bind(myobj, args)

    if (typeof Function.prototype.bind === "underfined") {
        Function.prototype.bind = function (thisArg) {
            var fn = this,
                slice = Array.prototype.slice,
                args = slice.call(arguments, 1);

            return function () {
                return fn.apply(thisArg, args.concat(slice.call(arguments)));
            };
        };
    }
})();