// Boolean
let isDone: boolean = false;
console.log("isDone:" + isDone);

// Number
let decimal: number = 6;
console.log("decimal:" + decimal);
let hex: number = 0xf00d;
console.log("hex:" + hex);
let binary: number = 0b1010;
console.log("binary:" + binary);
let octa1: number = 0x744;
console.log("octa1:" + octa1);

// String
let color: string = "blue";
color = 'red';
console.log("color:" + color);

let fullName: string = 'John Doh';
let age: number = 39;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next xxx.`;
console.log("sentence:" + sentence);

// Array
let list: number[] = [1, 2, 3];
console.log("list:" + list);
let list2: Array<number> = [4, 5, 6];
console.log("list2:" + list2);

// Tuple
// declare
let x: [string, number];
// initialize
x = ["Taro", 39];
console.log("x:" + x);
console.log("x[0]:" + x[0]);
console.log("x[0][2]:" + x[0][2]);

// Enum
enum Signal {Blue, Yellow, Red}
let y: Signal = Signal.Yellow;
console.log("Signal.Yellow:" + y);

// Any
let notSure: any = 4;
console.log("notSure:" + notSure);
notSure = "Not Sure";
console.log("notSure:" + notSure);
notSure = true;
console.log("notSure:" + notSure);

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log("someValue:" + someValue + " - length:" + strLength);
