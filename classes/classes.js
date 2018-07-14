var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newStr) {
            this._name = newStr;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee();
emp.name = "John";
if (emp.name) {
    console.log(emp.name);
}
//# sourceMappingURL=classes.js.map