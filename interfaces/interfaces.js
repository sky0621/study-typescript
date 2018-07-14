function printLabel(lval) {
    console.log(lval.label);
}
printLabel({ label: "Hey" });
console.log("");
function createSquare(cfg) {
    var newSquare = { color: "white", area: 100 };
    if (cfg.color) {
        newSquare.color = cfg.color;
    }
    if (cfg.width) {
        newSquare.area = cfg.width * cfg.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var mySquare2 = createSquare({ width: 90 });
console.log(mySquare2);
console.log("");
var point01 = { x: 10, y: 20 };
console.log(point01);
var signal02 = { red: 1 };
console.log(signal02);
console.log("");
var srchFn = function (src, sub) {
    var exist = src.search(sub);
    return exist > -1;
};
console.log(srchFn("testtest", "st"));
console.log(srchFn("testtest", "sts"));
console.log("");
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
console.log("");
var ClockImpl = /** @class */ (function () {
    function ClockImpl(h, m) {
    }
    ClockImpl.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return ClockImpl;
}());
var ccc = {};
console.log(ccc);
ccc.color = "Green";
ccc.side = 9876;
console.log(ccc);
//# sourceMappingURL=interfaces.js.map