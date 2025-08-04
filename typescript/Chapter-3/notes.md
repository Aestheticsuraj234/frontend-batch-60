### ✅ 1. **Tuples in TypeScript**

Tuples allow you to **define an array with fixed number of elements**, where each element has a **specific type and position**.

#### 🔸 Example:

```ts
let user: [string, number];
user = ["Alice", 25]; // ✅ Valid
// user = [25, "Alice"]; ❌ Error: types mismatch
```

You can access them like arrays:

```ts
console.log(user[0]); // "Alice"
```

#### 🔹 Optional elements:

```ts
let point: [number, number, number?];
point = [10, 20];
point = [10, 20, 30]; // ✅ also valid
```

---

### ✅ 2. **Unions (`|`)**

Unions let you say **a value can be one of several types**.

#### 🔸 Example:

```ts
let id: string | number;
id = 101;
id = "abc123";
```

Useful in functions:

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID is a string:", id.toUpperCase());
  } else {
    console.log("ID is a number:", id.toFixed(2));
  }
}
```

---

### ✅ 3. **Intersections (`&`)**

Intersections combine multiple types into one. The final type must have **all** properties of the intersected types.

#### 🔸 Example:

```ts
type Person = { name: string };
type Worker = { company: string };

type Employee = Person & Worker;

const e1: Employee = {
  name: "Suraj",
  company: "Google"
};
```

---

### ✅ 4. **Generics in TypeScript**

Generics allow you to write **reusable and flexible** functions, classes, or interfaces.

#### 🔸 Generic Function:

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42));
console.log(identity<string>("hello"));
```

#### 🔹 Generic Array:

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // 1
```

#### 🔸 Generic Interface:

```ts
interface Box<T> {
  content: T;
}

let stringBox: Box<string> = { content: "Hello" };
let numberBox: Box<number> = { content: 123 };
```

---

### ✅ 5. **Function Overloading with Generics**

Function overloading allows you to define **multiple function signatures**, and **generics make them more flexible**.

---

#### 🔹 Basic Overloading Example:

```ts
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(5, 10));      // 15
console.log(combine("a", "b"));   // ab
```

---

#### 🔸 Overloading with Generics:

You can make it more **generic** using `<T>`:

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray("hi"));      // ["hi"]
console.log(wrapInArray(100));       // [100]
console.log(wrapInArray({ x: 10 })); // [{ x: 10 }]
```

---

#### 🔹 Overload Signatures with Generics:

```ts
function processInput(value: string): string;
function processInput<T>(value: T): T;
function processInput(value: any): any {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value;
}

console.log(processInput("hello")); // "HELLO"
console.log(processInput(123));     // 123
```



## ✅ 6. **Multiple Generics in TypeScript**

When you want to handle **more than one type**, you can use multiple generic type parameters like `<T, U>`, `<T, U, V>`, etc.

---

### 🔸 Basic Example with Two Generics:

```ts
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result1 = pair("hello", 42);    // [string, number]
const result2 = pair(true, { x: 10 }); // [boolean, object]
```

---

### 🔸 Generic Interface with Multiple Types:

```ts
interface ApiResponse<T, U> {
  data: T;
  error: U;
}

const successResponse: ApiResponse<string, null> = {
  data: "Data fetched",
  error: null
};

const errorResponse: ApiResponse<null, string> = {
  data: null,
  error: "Something went wrong"
};
```

---

### 🔸 Function Overloading with Multiple Generics

You can also **overload functions** that use multiple generics:

```ts
function merge<T, U>(a: T, b: U): [T, U];
function merge<T, U, V>(a: T, b: U, c: V): [T, U, V];
function merge(...args: any[]): any {
  return args;
}

const res1 = merge("suraj", 23);           // ["suraj", 23]
const res2 = merge("code", true, 99);      // ["code", true, 99]
```

---

### 🔹 Multiple Generics with Constraints

You can also use constraints on multiple generics:

```ts
function compareLength<T extends { length: number }, U extends { length: number }>(
  a: T,
  b: U
): string {
  return a.length > b.length ? "a is longer" : "b is longer";
}

console.log(compareLength("TypeScript", [1, 2, 3])); // a is longer
```

---

### 🔹 Swapping with Two Generics:

```ts
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

console.log(swap("frontend", 101)); // [101, "frontend"]
```

---

## 🧠 When to Use Multiple Generics?

* When two or more inputs have **different types**.
* When you want to **return multiple values**.
* When building **utility functions**, APIs, or **data transformation** logic.

