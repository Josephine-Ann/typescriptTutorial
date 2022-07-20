var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
// you can't reassign this later on
// even if you write it as:
// let id = 5, it infers the type
var authorName = "Jo is my name";
var isPublished = true;
var x = "Hello";
x = true;
// x can be reassigned, because it's type any
var ids = [1, 2, 3, 4, 5];
// id.push('Hello')
// Line above cannot work, because it's a string
var arr = [1, true, "Hello"];
// Tuple
var person = [1, "Jo", true];
// Person has to be just like this
var deadPets;
deadPets = [
    [1, "Ginger"],
    [2, "Alpha"],
    [3, "Silver Sonic"],
    [4, "Tiger"],
    [5, "Sparky"]
];
//  Union
var productId = 22;
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
var user = {
    id: 1,
    name: "John"
};
var user2 = {
    id: 4,
    name: "Lily"
};
// Type Assertion -> change type, 2 ways:
var cid = 1;
var customerId = cid;
cid = cid;
console.log("reset as number");
console.log(cid);
cid = cid;
console.log("reset as number");
console.log(cid);
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
var OtherUser = {
    id: 1,
    name: "john"
};
var p1 = 1;
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
console.log(add(2, 3));
// Classes 
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        // return 2 -> can't wrk w interface
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, "Brad");
var mike = new Person(4, "Lily");
console.log(brad.register());
var reese = new Person(4, "Sara");
// subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(4, "rita", "secretary");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["brad", "john", "jill"]);
// strArray.push(1)
