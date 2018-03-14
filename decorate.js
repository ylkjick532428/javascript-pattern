var tools = require("./tools");
var addSplitChar = tools.prototype.addSplitChar;

addSplitChar("decorate pattern use dict achieve");
(function(){
    function Sale(price) {
        this.price = price || 100;
    };

    Sale.prototype.getPrice = function () {
        return this.price;
    };

    Sale.decorators = {};

    Sale.decorators.fedtax = {
        getPrice: function () {
            var price = this.uber.getPrice();
            price += price * 5 / 100;
            return price;
        }
    };

    Sale.decorators.quebec = {
        getPrice: function () {
            var price = this.uber.getPrice();
            price += price * 7.5 / 100;
            return price;
        }
    };

    Sale.decorators.money = {
        getPrice: function () {
            return "$" + this.uber.getPrice().toFixed(2);
        }
    };

    Sale.decorators.cdn = {
        getPrice: function () {
            return "CDN$" + this.uber.getPrice().toFixed(2);
        }
    };

    Sale.prototype.decorate = function(decorator){
        var F = function () {}
        var overrides = this.constructor.decorators[decorator];
        var i, newobj;
        F.prototype = this;
        newobj = new F();
        newobj.uber = F.prototype;
        for (i in overrides) {
            if (overrides.hasOwnProperty(i)) {
                newobj[i] = overrides[i];
            }
        }
        console.log(newobj);
        return newobj;
    };

    var sale = new Sale(100);
    sale = sale.decorate("fedtax");
    sale = sale.decorate("quebec");
    sale = sale.decorate("money");
    console.log(sale.getPrice());
})();


addSplitChar("decorate pattern use list achieve");
(function(){
    
    function Sale(price) {
        this.price = price || 100;
        this.decorators_list = [];
    };

    Sale.decorators = {};

    Sale.decorators.fedtax = {
        getPrice: function(price){
            price += price * 5 / 100;
            return price;
        }
    }

    Sale.decorators.quebec = {
        getPrice: function (price) {
            price += price * 7.5 / 100;
            return price;
        }
    };

    Sale.decorators.money = {
        getPrice: function (price) {
            return "$" + price.toFixed(2);
        }
    }

    Sale.decorators.cdn = {
        getPrice: function () {
            return "CDN$" + price.toFixed(2);
        }
    }

    Sale.prototype.decorate = function(decorator){
        this.decorators_list.push(decorator);
    };

    Sale.prototype.getPrice = function () {
        var price = this.price,
            i,
            max = this.decorators_list.length;
        for (i = 0; i < max; i += 1) {
            name = this.decorators_list[i];
            console.log(name);
            console.log(Sale.decorators[name]);
            price = Sale.decorators[name].getPrice(price);
        }
        return price;
    }

    var sale = new Sale(100);
    sale.decorate("fedtax");
    sale.decorate("quebec");
    sale.decorate("money");
    console.log(sale.getPrice());
})();
