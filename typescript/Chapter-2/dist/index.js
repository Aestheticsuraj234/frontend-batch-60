"use strict";
function greet(username) {
    return `Hello ${username}`;
}
console.log(greet("Suraj"));
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));
function greetMyName(greet, username = "Guest") {
    return `${greet}🙏🏻! , ${username}`;
}
console.log(greetMyName());
// userData?.name
// let numbers:number[] = [1,2,3,4];
let arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
let arr2 = Array.of(1, 2, 3, 4);
console.log(arr2); // [1, 2, 3, 4];
let user = {
    name: "suraj",
    age: 21,
    isStudent: true,
    greet: (username) => console.log(`${username}`),
    address: {
        city: "Noida",
        pincode: 201301,
    },
};
let user2 = {
    name: "Karan",
    age: 21,
    isStudent: true,
    greet: (username) => console.log(`${username}`),
    address: {
        city: "Noida",
        pincode: 201301,
    },
};
const adds = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
var Direction;
(function (Direction) {
    Direction["NORTH"] = "north";
    Direction["SOUTH"] = "south";
    Direction["EAST"] = "east";
    Direction["WEST"] = "west";
})(Direction || (Direction = {}));
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
    ROLE[ROLE["GUEST"] = 2] = "GUEST";
})(ROLE || (ROLE = {}));
let role = ROLE.ADMIN;
let dir = Direction.NORTH;
console.log(dir); // 0
