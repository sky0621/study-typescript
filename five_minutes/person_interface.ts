interface Person {
    firstName: string
    lastName: string
}

function greeter2(p: Person) {
    return "Hello, " + p.firstName + " " + p.lastName
}

let user2 = {firstName: "John", lastName: "Doh"}
console.log(greeter2(user2))
