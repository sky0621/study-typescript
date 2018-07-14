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
// /////////////////////////////////////////////
//# sourceMappingURL=interfaces.js.map