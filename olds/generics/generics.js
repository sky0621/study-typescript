function identity(arg) {
    return arg;
}
var strId = identity("This is a test");
console.log(strId);
console.log("");
/////////////////////////////////////////////////////////
function getProperty(obj, key) {
    return obj[key];
}
var xxx = { a: 1, b: 2, c: 3 };
console.log(getProperty(xxx, "a"));
//# sourceMappingURL=generics.js.map