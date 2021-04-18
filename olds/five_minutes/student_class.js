var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = firstName + " " + lastName;
    }
    return Student;
}());
function greeter3(p) {
    return "Hello, " + p.firstName + " " + p.lastName;
}
var stu = new Student("John2", "Doh2");
console.log(greeter3(stu));
//# sourceMappingURL=student_class.js.map