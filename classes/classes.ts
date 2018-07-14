class Employee {
    private _name: string

    get name(): string {
        return this._name
    }

    set name(newStr: string) {
        this._name = newStr
    }
}

let emp = new Employee()
emp.name = "John"
if(emp.name) {
    console.log(emp.name)
}
