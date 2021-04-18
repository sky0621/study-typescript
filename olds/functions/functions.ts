let myAdd: (a: number, b: number) => boolean = function(a: number, b: number): boolean {
    return a > b
}
console.log(myAdd(3, 2))
console.log("")

function buildName(first: string, last?: string): string {
    if (last) {
        return first + " " + last
    } else {
        return first
    }
}
console.log(buildName("ffff"))
console.log(buildName("ffff", "zzzz"))
console.log("")
