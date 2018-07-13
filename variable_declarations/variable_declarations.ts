console.log("### let declarations ###")

function f(input: boolean) {
    let a = 100

    if (input) {
        let b = a + 10
        return b
    }

    // return b
    return a
}

console.log(f(true))
console.log(f(false))
