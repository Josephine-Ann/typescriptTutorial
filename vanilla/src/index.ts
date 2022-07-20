// Basic Types
let id: number = 5;
// you can't reassign this later on
// even if you write it as:
// let id = 5, it infers the type
let authorName: string = "Jo is my name"
let isPublished: boolean = true
let x: any = "Hello"
x = true
// x can be reassigned, because it's type any
let ids: number[] = [1, 2, 3, 4, 5]
// id.push('Hello')
// Line above cannot work, because it's a string
let arr: any[] = [1, true, "Hello"]
// Tuple
let person: [number, string, boolean] = [1, "Jo", true]
// Person has to be just like this
let deadPets: [number, string][]

deadPets = [
    [1, "Ginger"],
    [2, "Alpha"],
    [3, "Silver Sonic"],
    [4, "Tiger"],
    [5, "Sparky"]
]
//  Union
let productId: string | number = 22
productId = "Now I'm a string"
productId = 44
productId = "Now I'm a string again"

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    GetUp = 5,
    GetUpAndGetAround,
    MoveUpMoveUp,
    GetDown
}

console.log('ID:', id)
console.log(Direction1.Up)
// 0
console.log(Direction2)
// {
//     '5': 'GetUp',
//     '6': 'GetUpAndGetAround',
//     '7': 'MoveUpMoveUp',
//     '8': 'GetDown',
//     GetUp: 5,
//     GetUpAndGetAround: 6,
//     MoveUpMoveUp: 7,
//     GetDown: 8
//   }

// objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "John"
}

type User2 = {
    id: number,
    name: string
}

const user2: User2 = {
    id: 4,
    name: "Lily"
}

// Type Assertion -> change type, 2 ways:
let cid: any = 1
let customerId = <number>cid
cid = <number>cid
console.log("reset as number")
console.log(cid)
cid = cid as string
console.log("reset as number")
console.log(cid)

function addNum(x: number, y: number): string {
    return (x + y).toString()
}
// string means that it should return a string 
console.log(addNum(3, 77))

function log(message: string | number): void {
    console.log(message)
}

// void-> doesn't return anything
log("truer words have never been spoken")

// Interfaces
interface UserInterface {
    readonly id: number,
    // cannot be changed
    name: string,
    age?: number
    // age is optional because of the interr. mark
}

const OtherUser: UserInterface = {
    id: 1,
    name: "john"
}

// interface v type
// type can be used with primitives and unions
type Point = number | string
const p1: Point = 1
// interface Pointy = number | string
// const p2: Pointy = 1
// you can't use an interface with primitives/unions
// interfaces are for objects 

interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x, y) => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y
console.log(add(2, 3))

// const add: MathFunc = (x: number, y: number): number => x + y
// const subtract: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes 
class Person implements PersonInterface {
    id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register() {
        // return 2 -> can't wrk w interface
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad")
const mike = new Person(4, "Lily")
console.log(brad.register())
const reese = new Person(4, "Sara")

// subclasses
class Employee extends Person {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(4, "rita", "secretary")

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["brad", "john", "jill"])
// strArray.push(1)