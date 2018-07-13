console.log("### let declarations ###");
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 10;
        return b;
    }
    // return b
    return a;
}
console.log(f(true));
console.log(f(false));
//# sourceMappingURL=variable_declarations.js.map