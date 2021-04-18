console.log('typing.ts')

let birthday: number | string;

// 型に名前を付ける
type Birthday = number | string

type Person = {
  name: String
  favoriteBook?: String
}

function getPerson(): Person {
  return { name: "taro", favoriteBook: "Clean Architecture" }
}

// const { name, favoriteBook } = getPerson()

function isArray(arg: any): arg is Array<any> {
  return Array.isArray(arg)
}

const ary = [123, 456, 789]
console.log(isArray(ary))
