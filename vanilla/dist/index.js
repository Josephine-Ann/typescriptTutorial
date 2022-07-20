"use strict";
// Basic Types
let id = 5;
// you can't reassign this later on
// even if you write it as:
// let id = 5, it infers the type
let authorName = "Jo is my name";
let isPublished = true;
let x = "Hello";
x = true;
// x can be reassigned, because it's type any
let ids = [1, 2, 3, 4, 5];
// id.push('Hello')
// Line above cannot work, because it's a string
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Jo", true];
// Person has to be just like this
let deadPets;
deadPets = [
    [1, "Ginger"],
    [2, "Alpha"],
    [3, "Silver Sonic"],
    [4, "Tiger"],
    [5, "Sparky"]
];
//  Union
let productId = 22;
productId = "Now I'm a string";
productId = 44;
productId = "Now I'm a string again";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["GetUp"] = 5] = "GetUp";
    Direction2[Direction2["GetUpAndGetAround"] = 6] = "GetUpAndGetAround";
    Direction2[Direction2["MoveUpMoveUp"] = 7] = "MoveUpMoveUp";
    Direction2[Direction2["GetDown"] = 8] = "GetDown";
})(Direction2 || (Direction2 = {}));
console.log('ID:', id);
console.log(Direction1.Up);
// 0
console.log(Direction2);
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
const user = {
    id: 1,
    name: "John"
};
const user2 = {
    id: 4,
    name: "Lily"
};
// Type Assertion -> change type, 2 ways:
let cid = 1;
let customerId = cid;
let clientId = cid;
function addNum(x, y) {
    return (x + y).toString();
}
// string means that it should return a string 
console.log(addNum(3, 77));
function log(message) {
    console.log(message);
}
// void-> doesn't return anything
log("truer words have never been spoken");
const OtherUser = {
    id: 1,
    name: "john"
};
const p1 = 1;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        // return 2 -> can't wrk w interface
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(4, "Lily");
console.log(brad.register());
const reese = new Person(4, "Sara");
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(4, "rita", "secretary");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
// strArray.push(1)
