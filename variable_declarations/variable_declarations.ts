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
console.log("")

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
let nums: number[][] = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
let sums: number = sumMatrix(nums)
console.log(sums)
console.log("")

let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
console.log("")

first = input[0];
second = input[1];
// swap variables
[first, second] = [second, first];
console.log(first); // outputs 1
console.log(second); // outputs 2
console.log("")

let [first2, ...rest] = [1, 2, 3, 4];
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
console.log("")

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a)
console.log(b)
console.log("");

({ a, b } = { a: "baz", b: 101 });
console.log(a)
console.log(b)
console.log("");

let o2 = {
    a2: "foo",
    b: 12,
    c: "bar"
};
let {a2, ...passthrough} = o2;
console.log(a2)
console.log(passthrough.b)
console.log(passthrough.c)
console.log("")

function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1001} = wholeObject
}
let wo = {a: "all", b: 500}
console.log(wo)
console.log("")
