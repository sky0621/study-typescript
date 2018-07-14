function identity<T>(arg: T): T {
    return arg
}

let strId = identity<string>("This is a test")
console.log(strId)
console.log("")

/////////////////////////////////////////////////////////

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let xxx = {a: 1, b: 2, c: 3}
console.log(getProperty(xxx, "a"))

