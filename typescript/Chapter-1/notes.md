
# 📘 TypeScript Full Notes

---

## ✅ 1. Introduction to TypeScript

### 🔹 What is TypeScript?

TypeScript is a **superset of JavaScript** that adds **static typing** and other modern features to JavaScript.

* Developed by **Microsoft**
* Code written in `.ts` files
* Compiles (transpiles) into plain JavaScript (`.js` files)

---

### 🔹 Why TypeScript? What Problem Does It Solve?

| Problem in JavaScript           | TypeScript Solution                         |
| ------------------------------- | ------------------------------------------- |
| No static typing                | Adds static typing                          |
| No compile-time error checking  | Catches errors before runtime               |
| Poor IDE support                | Excellent autocomplete & hints              |
| Hard to scale large JS projects | Type safety + interfaces + better structure |
| Runtime type errors             | Compile-time type checks                    |

---

### 🔹 Advantages of TypeScript

* ✅ **Type Safety** — Prevents runtime bugs
* ✅ **Better Developer Experience** — Autocomplete, IntelliSense, and tooltips
* ✅ **Early Error Detection** — Errors found at compile time
* ✅ **Scalability** — Great for large codebases
* ✅ **Support for Modern Features** — Like optional chaining, nullish coalescing

---

## ✅ 2. Installation & Setup

### 🔹 Install TypeScript Globally

```bash
npm install -g typescript
```

### 🔹 Check the Version

```bash
tsc -v
```

---

### 🔹 Compile without Config (Manual)

Create a `hello.ts`:

```ts
let message: string = "Hello TypeScript!";
console.log(message);
```

Compile:

```bash
tsc hello.ts
```

It will generate `hello.js`.

---

### 🔹 Initialize a TypeScript Project

```bash
tsc --init
```

This creates a `tsconfig.json` file, which lets you configure the behavior of the compiler.

---

### 🔹 Key `tsconfig.json` Options

```json
{
  "compilerOptions": {
    "target": "es6",              // JS version to compile to
    "module": "commonjs",         // module system
    "outDir": "./dist",           // output directory
    "rootDir": "./src",           // source directory
    "strict": true,               // enables all strict type checks
    "esModuleInterop": true,      // allows default imports
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true
  }
}
```

Then run:

```bash
tsc
```

It will compile all `.ts` files in `src/` to `.js` files in `dist/`.

---

## ✅ 3. How to Compile TypeScript

| Mode        | Command                                |
| ----------- | -------------------------------------- |
| Single file | `tsc index.ts`                         |
| With config | `tsc` (runs `tsconfig.json`)           |
| Watch mode  | `tsc -w` (auto compile on file change) |

---

## ✅ 4. Type Annotations in TypeScript

Type annotations let you **declare the expected data type** of a variable, function, or parameter.

---

### 🔹 Basic Primitive Types

#### 1. **`string`**

```ts
let username: string = "Suraj";
```

#### 2. **`number`**

```ts
let age: number = 25;
```

#### 3. **`boolean`**

```ts
let isActive: boolean = true;
```

#### 4. **`bigint`**

```ts
let big: bigint = 9007199254740991n;
```

#### 5. **`null` and `undefined`**

```ts
let nothing: null = null;
let notAssigned: undefined = undefined;
```

#### 6. **`symbol`**

```ts
let sym1: symbol = Symbol("id");
```

---

### 🔹 More Advanced & Special Types

#### 7. **`any`** (Avoid if possible)

```ts
let randomValue: any = "Hello";
randomValue = 42;
```

#### 8. **`unknown`**

```ts
let value: unknown = 10;
// value.toFixed(2); ❌ Error: must narrow down type
```

#### 9. **`void`** (for functions that return nothing)

```ts
function logMessage(): void {
  console.log("Hello!");
}
```

#### 10. **`never`** (for functions that never return)

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

### 🔹 Arrays and Tuples

#### 11. **Array**

```ts
let scores: number[] = [90, 85, 100];
let names: Array<string> = ["Ram", "Shyam"];
```

#### 12. **Tuple**

```ts
let user: [string, number] = ["Suraj", 25];
```

---

### 🔹 Union & Literal Types

#### 13. **Union**

```ts
let id: number | string = 101;
id = "abc";
```

#### 14. **Literal**

```ts
let role: "admin" | "user" | "guest";
role = "admin"; // ✅
role = "superuser"; // ❌
```

---

### 🔹 Enums (Custom set of constants)

```ts
enum Direction {
  North,
  East,
  South,
  West
}

let dir: Direction = Direction.North;
```

---

### 🔹 Type Aliases

```ts
type UserID = number | string;

let userId: UserID = 101;
```

---

### 🔹 Optional and Default Parameters

```ts
function greet(name: string = "Guest", age?: number) {
  console.log(`Hello, ${name}`);
}
```

---

## 📌 Summary Table

| Type                 | Example                                       |          |
| -------------------- | --------------------------------------------- | -------- |
| `string`             | `"hello"`                                     |          |
| `number`             | `42`                                          |          |
| `boolean`            | `true`                                        |          |
| `bigint`             | `123n`                                        |          |
| `symbol`             | `Symbol("id")`                                |          |
| `null` / `undefined` | `null`, `undefined`                           |          |
| `any`                | anything (not recommended)                    |          |
| `unknown`            | type-safe version of `any`                    |          |
| `void`               | used in functions returning nothing           |          |
| `never`              | functions that throw errors or infinite loops |          |
| `array`              | `number[]`, `string[]`                        |          |
| `tuple`              | `[string, number]`                            |          |
| `union`              | \`string                                      | number\` |
| `literal`            | \`"admin"                                     | "user"\` |
| `enum`               | `enum Color {Red, Green}`                     |          |

---

