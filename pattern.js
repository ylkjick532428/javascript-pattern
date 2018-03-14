var tools = require("./tools");
var addSplitChar = tools.prototype.addSplitChar;

//Singleton Use static property method to achieve
addSplitChar("Singleton");
(function(){
    function Universe() {
        if (typeof Universe.instance === "object") {
            return Universe.instance;
        }

        this.start_time = 0;
        this.bang = "Big";

        Universe.instance = this;

        return this;
    }

    var uni = new Universe();
    var uni2 = new Universe();
    console.log(uni === uni2);
})();

//Singleton Use function closure method to achieve
addSplitChar("Singleton Use function closure method to achieve");
(function(){
    function Universe() {
        var instance = this;

        this.start_time = 0;
        this.bang = "Big";

        Universe = function () {
            return instance;
        }
    }
    var uni = new Universe();
    var uni2 = new Universe();
    console.log(uni === uni2);
})();

//Singleton, use prototype method to achieve
addSplitChar("Singleton, use prototype method to achieve");
(function(){
    function Universe() {
        var instance;
        Universe = function Universe() {
            return instance;
        }

        Universe.prototype = this;
        instance = new Universe();
        instance.constructor = Universe;

        instance.start_time = 0;
        instance.bang = "Big";
        return instance;
    }

    Universe.prototype.nothing = true;
    var uni = new Universe();
    Universe.prototype.everthing = true;
    var uni2 = new Universe();

    console.log(uni === uni2);
})();

//Single, use immeditaly and instance of closure to achieve
addSplitChar("Single, use immeditaly and instance of closure to achieve");
(function(){
    var Universe;
    (function(){
        var instance;
        Universe = function Universe() {
            if (instance) {
                return instance;
            }

            instance = this;

            this.start_time = 0;
            this.bang = "Big";
        }
    });
    
})();