var tools = require("./tools");
var addSplitChar = tools.prototype.addSplitChar;

//facade pattern
addSplitChar("facade pattern");
(function(){
    var myevent = {
        stop: function (e) {
            if (typeof e.preventDefault === "function") {
                e.preventDefault();
            }
            if (typeof e.stopPropagation() === "function") {
                e.stopPropagation();
            }
            
            //IE
            if (typeof e.returnValue === "boolean") {
                e.returnValue = false;
            }
            if (typeof e.cancelBubble === "boolean") {
                e.cancelBubble = true;
            }
        }
    }
})();