let isDone: boolean = true
console.log("boolean: " + isDone)

let deci: number = 3
console.log("number(decimal): " + deci)

let hecn: number = 0x1234
console.log("number(hex): " + hecn)

let bina: number = 0b1010
console.log("number(binary): " + bina)

let oct: number = 0o1234
console.log("number(oct): " + oct)

let color: string = "red"
console.log("string: " + color)

let pen: string = "pen"
let pencil: string = "pencil"
let amount: number = 115
let sentence: string = `
    This is a ${pen}.
    That is a ${pencil}.
    Amount is ${amount}
`
console.log("sentence: " + sentence)

let numAry: number[] = [1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log("array(number): " + numAry)

let strAry: Array<string> = ["JavaScript", "Golang", "Python"]
console.log("array(string): " + strAry)

let t: [number, string]
t = [343, "tft"]
console.log("tuple: " + t)
console.log("tuple[1]: " + t[1])

enum Signal {Green = 1, Yellow, Red}
console.log("enum(Signal): " + Signal)
let y: Signal = Signal.Yellow
let ys: string = Signal[2]
console.log("enum(Signal.Yellow): " + y)
console.log("enum.string(Signal[2]): " + ys)

let anyVal: any = 123
console.log("any: " + anyVal)
anyVal = "Anything"
console.log("any: " + anyVal)
anyVal = true
console.log("any: " + anyVal)

let nullVal: void
console.log(nullVal)

function doAlert(s: string): void {
    console.log(s)
}
doAlert("test")

function doError(): never {
    throw new Error("Err")
}

doError()
