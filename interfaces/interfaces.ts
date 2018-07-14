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
