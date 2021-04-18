var isDone = true;
console.log("boolean: " + isDone);
var deci = 3;
console.log("number(decimal): " + deci);
var hecn = 0x1234;
console.log("number(hex): " + hecn);
var bina = 10;
console.log("number(binary): " + bina);
var oct = 668;
console.log("number(oct): " + oct);
var color = "red";
console.log("string: " + color);
var pen = "pen";
var pencil = "pencil";
var amount = 115;
var sentence = "\n    This is a " + pen + ".\n    That is a " + pencil + ".\n    Amount is " + amount + "\n";
console.log("sentence: " + sentence);
var numAry = [1, 2, 3, 5, 8, 13, 21, 34, 55];
console.log("array(number): " + numAry);
var strAry = ["JavaScript", "Golang", "Python"];
console.log("array(string): " + strAry);
var t;
t = [343, "tft"];
console.log("tuple: " + t);
console.log("tuple[1]: " + t[1]);
var Signal;
(function (Signal) {
    Signal[Signal["Green"] = 1] = "Green";
    Signal[Signal["Yellow"] = 2] = "Yellow";
    Signal[Signal["Red"] = 3] = "Red";
})(Signal || (Signal = {}));
console.log("enum(Signal): " + Signal);
var y = Signal.Yellow;
var ys = Signal[2];
console.log("enum(Signal.Yellow): " + y);
console.log("enum.string(Signal[2]): " + ys);
var anyVal = 123;
console.log("any: " + anyVal);
anyVal = "Anything";
console.log("any: " + anyVal);
anyVal = true;
console.log("any: " + anyVal);
var nullVal;
console.log(nullVal);
function doAlert(s) {
    console.log(s);
}
doAlert("test");
function doError() {
    throw new Error("Err");
}
doError();
//# sourceMappingURL=basic_types.js.map