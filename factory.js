var tools = require("./tools");
var addSplitChar = tools.prototype.addSplitChar;


//factory pattern
addSplitChar("factory pattern");
(function(){
    function CarMaker() {};
    CarMaker.prototype.drive = function () {
        return "Vroom, I have " + this.doors + " doors";
    };

    CarMaker.factory = function (type) {
        var constr = type,
            newcar;

        if (typeof CarMaker[constr] !== "function") {
            throw {
                name: "Error",
                message: constr + " doesn't exist"
            };
        }
        if (typeof CarMaker[constr].prototype.drive !== "function") {
            CarMaker[constr].prototype = new CarMaker();
        }

        newcar = new CarMaker[constr]();
        return newcar;
    }

    CarMaker.Compact = function () {
        this.doors = 4;
    }

    CarMaker.Convertible = function () {
        this.doors = 2;
    }

    CarMaker.SUV = function () {
        this.doors = 24;
    }

    var corolla = CarMaker.factory("Compact");
    var solstic = CarMaker.factory("Convertible");
    var cherokee = CarMaker.factory("SUV");

    console.log(corolla.drive());
    console.log(solstic.drive());
    console.log(cherokee.drive());

})();

//build-in factory object
addSplitChar("build-in factory object");
(function(){
    var o = new Object({});
    var n = new Object(1);
    var s = new Object("1");
    var b = new Object(true);

    console.log(o.constructor === Object);
    console.log(n.constructor === Number);
    console.log(s.constructor === String);
    console.log(b.constructor === Boolean);
})();