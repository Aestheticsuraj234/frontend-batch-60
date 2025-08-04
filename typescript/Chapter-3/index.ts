// console.log("Hello");


// let myDetails:[ string , number , boolean] = ["Suraj",21,true,]



 let value: string | number | boolean = "Suraj";

// function printId(id: string | number) {
//   if (typeof id === "string") {
//     console.log("ID is a string:", id.toUpperCase());
//   } else {
//     console.log("ID is a number:", id.toFixed(2));
//   }
// }

// printId("0101");
// printId(1234);


// type Person = { name: string };
// type Worker = { company: string };
// type Human = {gender: string};

// type Employee = Person & Worker & Human;

// const e1: Employee = {
//   name: "Suraj",
//   company: "Google",
//   gender: "male"
// };

// export {}

// function logAndReturn(value:string | number | boolean):string | number | boolean {
//     console.log(value);
//     return value;
// }


// logAndReturn(true)
// logAndReturn("Suraj")

// Generics
// function logAndReturn<T , U>(value:T , value2:U){
//     console.log(value)
//     return [value , value2]
// }

// logAndReturn(true , "Suraj")

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42));
console.log(identity<string>("hello"));

// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: any, b: any): any {
//   return a + b;
// }

// console.log(combine(5, 10));      // 15
// console.log(combine("a", "b"));   // ab


function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

console.log(pair("Hello" , 99))