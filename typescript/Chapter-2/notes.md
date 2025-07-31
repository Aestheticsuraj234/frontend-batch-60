
## 🧠 1. **Functions in TypeScript**

Functions are the building blocks of TypeScript. You can define:

* **Parameter types** to ensure correct input
* **Return types** to ensure correct output

### 🧪 Example 1: Named Function

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Suraj")); // Hello, Suraj
```

* `name: string` → only accepts strings.
* `: string` after function → ensures the function returns a string.

### 🧪 Example 2: Arrow Function

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 3)); // 8
```

You **must** define both input types and return type when clarity is needed.

---

## 🧠 2. **Type Inference**

TypeScript is smart. When you assign a value, it **infers the type** behind the scenes.

```ts
let message = "Hello"; // inferred as string
let count = 42;        // inferred as number
```

Trying to assign a different type will throw an error:

```ts
// message = 100; ❌ Error: Type 'number' is not assignable to type 'string'
```

### 🧠 Why It’s Useful?

* Less boilerplate
* Still strict & type-safe
* Good for rapid development

---

## 🧠 3. **Optional & Default Parameters**

### ✅ Optional Parameters

Use `?` after the parameter name to make it optional.

```ts
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, age ${age}`;
  }
  return `Hello ${name}`;
}
```

### ✅ Default Parameters

You can provide a **default value** if no value is passed.

```ts
function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

### 🧪 Output

```ts
console.log(greet("Suraj"));      // Hello Suraj
console.log(greet("Suraj", 22));  // Hello Suraj, age 22
console.log(multiply(5));         // 10
console.log(multiply(5, 3));      // 15
```

---

## 🧠 4. **Arrays in TypeScript**

### ✅ 1. Basic Declaration

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];
```

### ✅ 2. Using Constructor

```ts
let arr = new Array<number>(3); // creates array of size 3
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
```

### ✅ 3. Using `Array.of()`

```ts
let arr2 = Array.of(1, 2, 3, 4);
console.log(arr2); // [1, 2, 3, 4]
```

🔍 You can also do `Array<string>` if you prefer generic syntax.

---

## 🧠 5. **Objects in TypeScript**

TypeScript lets you **define object structure explicitly**.

### ✅ Example

```ts
let user: { name: string; age: number } = {
  name: "Suraj",
  age: 25,
};
```

### ✅ Optional Properties

```ts
let product: { title: string; price?: number } = {
  title: "Book",
};
```

You must match the **type structure** strictly, or TypeScript will throw an error.

---

## 🧠 6. **Type Alias**

A type alias lets you **reuse complex types** with a custom name.

### ✅ Example

```ts
type User = {
  name: string;
  age: number;
};

const u1: User = {
  name: "Suraj",
  age: 23,
};
```

💡 **Why use it?**

* DRY (Don’t Repeat Yourself)
* Readable & maintainable code
* Can extend easily

---

## 🧠 7. **Function Call Signatures** (Function Types)

You can define **types for functions** using a `type`.

### ✅ Example

```ts
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5
```

This ensures that any function using `MathOperation`:

* Takes 2 numbers
* Returns a number

---

## 🧠 8. **Enums in TypeScript**

Enums represent **a fixed set of named constants**.

### ✅ Numeric Enum (default)

```ts
enum Direction {
  North, // 0
  South, // 1
  East,  // 2
  West,  // 3
}

let dir: Direction = Direction.North;
console.log(dir); // 0
```

### ✅ String Enum

```ts
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
}

let status: Status = Status.Success;
console.log(status); // SUCCESS
```

### ✅ Why Enums?

* Improves **readability**
* Prevents **magic strings**
* Safer than plain strings or numbers

---

## ✅ Summary Table:

| Concept                 | Feature Type              | Purpose / Use Case                       |
| ----------------------- | ------------------------- | ---------------------------------------- |
| Functions               | `: type`                  | Control input/output types               |
| Type Inference          | Automatic                 | Let TS guess types, while staying strict |
| Optional/Default Params | `?`, `=`                  | Flexibility in function parameters       |
| Arrays                  | `type[]` or `Array<type>` | Typed collections                        |
| Objects                 | `{ key: type }`           | Explicit shape of objects                |
| Type Alias              | `type Name = ...`         | Reuse & simplify complex types           |
| Function Types          | `(a: T, b: T) => T`       | Describe function structure as a type    |
| Enums                   | `enum`                    | Named constants for fixed values         |
