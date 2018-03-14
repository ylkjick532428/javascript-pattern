var Tool = {
};

Tool.prototype = {};

Tool.prototype.addSplitChar = function(name, size) {
    var size = size || 50;
    var name = name || "";

    var str = [];
    for (var i = 0; i < size; i++){
        str.push("=")
    }
    var str2 = new String(str.join(""));
    
    console.log(str2 + name + str2);
};

module.exports = Tool;
