let age:number = 21;
let username: string = "Suraj";
let isActive: boolean = true;
let big: bigint = 9007199254740991n;
let nothing: null = null;
let notAssigned: undefined = undefined;

let sym1: symbol = Symbol("id");

console.log("the age is" , age)

let randomValue:any =  "Hello";

randomValue = 12;
randomValue = true;

let value:unknown = "Hello";

function logMessage():void{
    console.log("Hello!")
}

logMessage()


let array:[string , number , boolean] = ["123" , 123 , true]

let scores:number[] = [90 , 86 , 100]

let id:number | string = "0101";

let role:"admin" | "user" | "guest" = "admin";

enum Status {
    PENDING,
    SUCCESS,
    FAILED,
    PROCESSING
}

let eCom:Status = Status.PROCESSING;