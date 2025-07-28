"use strict";
let age = 21;
let username = "Suraj";
let isActive = true;
let big = 9007199254740991n;
let nothing = null;
let notAssigned = undefined;
let sym1 = Symbol("id");
console.log("the age is", age);
let randomValue = "Hello";
randomValue = 12;
randomValue = true;
let value = "Hello";
function logMessage() {
    console.log("Hello!");
}
logMessage();
let array = ["123", 123, true];
let scores = [90, 86, 100];
let id = "0101";
let role = "admin";

var Status;
(function (Status) {
    Status[Status["PENDING"] = 0] = "PENDING";
    Status[Status["SUCCESS"] = 1] = "SUCCESS";
    Status[Status["FAILED"] = 2] = "FAILED";
    Status[Status["PROCESSING"] = 3] = "PROCESSING";
})(Status || (Status = {}));

let eCom = Status.PROCESSING;
