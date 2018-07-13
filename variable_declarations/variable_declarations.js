var _a;
console.log("### let declarations ###");
function f(input) {
    var a = 100;
    if (input) {
        var b_1 = a + 10;
        return b_1;
    }
    // return b
    return a;
}
console.log(f(true));
console.log(f(false));
console.log("");
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
var nums = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
var sums = sumMatrix(nums);
console.log(sums);
console.log("");
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
console.log("");
first = input[0];
second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
console.log("");
var _b = [1, 2, 3, 4], first2 = _b[0], rest = _b.slice(1);
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
console.log("");
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a);
console.log(b);
//# sourceMappingURL=variable_declarations.js.map