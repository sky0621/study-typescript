var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a, _b;
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
var _c = [1, 2, 3, 4], first2 = _c[0], rest = _c.slice(1);
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
console.log("");
(_b = { a: "baz", b: 101 }, a = _b.a, b = _b.b);
console.log(a);
console.log(b);
console.log("");
var o2 = {
    a2: "foo",
    b: 12,
    c: "bar"
};
var a2 = o2.a2, passthrough = __rest(o2, ["a2"]);
console.log(a2);
console.log(passthrough.b);
console.log(passthrough.c);
console.log("");
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
var wo = { a: "all", b: 500 };
console.log(wo);
console.log("");
var other1 = [3, 4];
var other2 = [6, 7, 8, 9];
var bothPlus = [1, 2].concat(other1, [5], other2, [10, 11]);
console.log(bothPlus);
console.log("");
var cls = /** @class */ (function () {
    function cls() {
        this.vval = 111;
    }
    cls.prototype.mtd = function () {
        console.log("mtd");
    };
    return cls;
}());
var c01 = new cls();
console.log(c01);
c01.mtd();
console.log("");
var c02 = __assign({}, c01);
console.log(c02);
//console.log(c02.mtd())
console.log("");
//# sourceMappingURL=variable_declarations.js.map