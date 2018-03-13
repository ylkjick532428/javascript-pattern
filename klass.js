var addSplitChar = function(name, size) {
    var size = size || 50;
    var name = name || "";

    var str = [];
    for (var i = 0; i < size; i++){
        str.push("=")
    }
    var str2 = new String(str.join(""));
    
    console.log(str2 + name + str2);
};

(function(){
    function klass(Parent, props) {
        var child, F, i;
        var Child = function () {
            if (Child.uber && Child.uber.hasOwnProperty("__construct")){
                Child.uber.__construct.apply(this, arguments);
            }
            if (Child.prototype.hasOwnProperty("__construct")){
                Child.prototype.__construct.apply(this, arguments);
            }
        };

        Parent = Parent || Object;
        F = function () {};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.uber = Parent.prototype;
        Child.prototype.constructor = Child;

        for (i in props) {
            if (props.hasOwnProperty(i)){
                Child.prototype[i] = props[i];
            }
        }
        return Child;
    }

    var Man = klass(null, {
        __construct: function (what) {
            console.log("Man's constructor");
            this.name = what;
        },
        getName: function () {
            return this.name;
        }
    });

    var SuperMan = klass(Man, {
        __construct: function (what) {
            console.log("SuperMan's constructor");
            this.name = what;
        },
        getName: function () {
            var name = SuperMan.uber.getName.call(this);
            return "I am " + name;
        }
    });

    var clark = new SuperMan("clark kent");
    console.log(clark.getName());

    console.log(clark instanceof Man);
    console.log(clark instanceof SuperMan);
})();

//class inherit
