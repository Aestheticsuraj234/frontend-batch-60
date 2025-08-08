console.log("Hello");

interface User {
    name:string;
    age:number
    isAdmin?:boolean
}

const user1:User = {
    name:"Sigma",
    age:21,
    isAdmin:true
}


interface GreetFunction {
    (name:string):string;
}

const greet:GreetFunction=(name)=>{
    return `Hello, ${name}`;
}

interface StringArray {
    [index:number]:string;
}

const names:StringArray = ["alpha" , "beta" , "gamma"]


interface A {
    a:string;
}

interface B{
    b:number;
}

interface C extends A,B {
    c:boolean
}

const test:C={
    a:"Hello",
    b:11,
    c:true
}

type user ={
    name:string
}

