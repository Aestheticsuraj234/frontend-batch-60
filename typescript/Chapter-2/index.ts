function greet(username: string): string {
  return `Hello ${username}`;
}

console.log(greet("Suraj"));

const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(5, 3));

function greetMyName(greet?: string, username: string = "Guest"): string {
  return `${greet}🙏🏻! , ${username}`;
}

console.log(greetMyName());

// userData?.name

// let numbers:number[] = [1,2,3,4];

let arr = new Array<number>(3);

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

let arr2 = Array.of(1, 2, 3, 4);
console.log(arr2); // [1, 2, 3, 4];

type User = {
  name: string;
  age: number;
  isStudent: boolean;
  greet: (username: string) => void;
  address?: { city: string; pincode: number };
};

let user: User = {
  name: "suraj",
  age: 21,
  isStudent: true,
  greet: (username) => console.log(`${username}`),
  address: {
    city: "Noida",
    pincode: 201301,
  },
};

let user2: User = {
  name: "Karan",
  age: 21,
  isStudent: true,
  greet: (username) => console.log(`${username}`),
  address: {
    city: "Noida",
    pincode: 201301,
  },
};


type MathOperation = (a: number, b: number) => number;

const adds: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5


enum Direction {
    NORTH = "north", // 0
    SOUTH = "south", // 1
    EAST = "east",  // 2
    WEST = "west",  // 3
}
enum ROLE {
    ADMIN,
    USER,
    GUEST,

}

let role = ROLE.ADMIN


let dir: Direction = Direction.NORTH;
console.log(dir); // 0