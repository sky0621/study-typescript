interface LabelledValus {
    label: string
}

function printLabel(lval: {label: string}) {
    console.log(lval.label)
}

printLabel({label: "Hey"})
console.log("")

// /////////////////////////////////////////////

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(cfg: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100}
    if (cfg.color) {
        newSquare.color = cfg.color
    }
    if (cfg.width) {
        newSquare.area = cfg.width * cfg.width
    }
    return newSquare
}

let mySquare = createSquare({color: "black"})
console.log(mySquare)
let mySquare2 = createSquare({width: 90})
console.log(mySquare2)
console.log("")

interface OrgPoint {
    readonly x: number
    readonly y: number
}

let point01: OrgPoint = {x: 10, y: 20}
console.log(point01)
// point01.x = 20

interface Signal02 {
    red: number
    yellow?: number
    green?: number
}

let signal02: Signal02 = {red: 1}
console.log(signal02)
console.log("")

// /////////////////////////////////////////////

interface SearchFunc {
    (src: string, substr: string): boolean
}

let srchFn: SearchFunc = function(src: string, sub: string): boolean {
    let exist = src.search(sub)
    return exist > -1
}

console.log(srchFn("testtest", "st"))
console.log(srchFn("testtest", "sts"))
console.log("")

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr)
console.log("")

// /////////////////////////////////////////////

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class ClockImpl implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) {

    }
}

// /////////////////////////////////////////////

interface Alpha {
    color: string
}
interface Beta extends Alpha {
    side: number
}
let ccc = <Beta>{}
console.log(ccc)
ccc.color = "Green"
ccc.side = 9876
console.log(ccc)
