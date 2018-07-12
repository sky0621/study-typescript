class Student {
    fullname: string
    constructor(public firstName: string, public lastName: string) {
        this.fullname = firstName + " " + lastName
    }
}

interface Person2 {
    firstName: string
    lastName: string
}

function greeter3(p: Person2) {
    return "Hello, " + p.firstName + " " + p.lastName
}

let stu = new Student("John2", "Doh2")
console.log(greeter3(stu))
