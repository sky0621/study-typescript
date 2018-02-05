// Boolean
var isDone = false;
console.log("isDone:" + isDone);
// Number
var decimal = 6;
console.log("decimal:" + decimal);
var hex = 0xf00d;
console.log("hex:" + hex);
var binary = 10;
console.log("binary:" + binary);
var octa1 = 0x744;
console.log("octa1:" + octa1);
// String
var color = "blue";
color = 'red';
console.log("color:" + color);
var fullName = 'John Doh';
var age = 39;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next xxx.";
console.log("sentence:" + sentence);
// Array
var list = [1, 2, 3];
console.log("list:" + list);
var list2 = [4, 5, 6];
console.log("list2:" + list2);
// Tuple
// declare
var x;
// initialize
x = ["Taro", 39];
console.log("x:" + x);
console.log("x[0]:" + x[0]);
console.log("x[0][2]:" + x[0][2]);
// Enum
var Signal;
(function (Signal) {
    Signal[Signal["Blue"] = 0] = "Blue";
    Signal[Signal["Yellow"] = 1] = "Yellow";
    Signal[Signal["Red"] = 2] = "Red";
})(Signal || (Signal = {}));
var y = Signal.Yellow;
console.log("Signal.Yellow:" + y);
// Any
var notSure = 4;
console.log("notSure:" + notSure);
notSure = "Not Sure";
console.log("notSure:" + notSure);
notSure = true;
console.log("notSure:" + notSure);
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log("someValue:" + someValue + " - length:" + strLength);
