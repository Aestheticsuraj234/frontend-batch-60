## ✅ What is an Interface in TypeScript?

**Interface** is a way to define the **structure of an object**. It is mainly used for **object shapes**, classes, and contracts between pieces of code.

### 📌 Syntax

```ts
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
}
```

### ✅ Example: Using Interface with Objects

```ts
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const user1: User = {
  name: "Sigma",
  age: 24,
};
```

---

## ✅ Interfaces with Functions

You can use interfaces to define the shape of **function types**.

```ts
interface GreetFunction {
  (name: string): string;
}

const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
};
```

---

## ✅ Interface with Arrays / Index Signatures

```ts
interface StringArray {
  [index: number]: string;
}

const names: StringArray = ["alpha", "beta", "gamma"];
```

---

## ✅ Interface with Classes

You can use `implements` to force a class to follow the structure.

```ts
interface Person {
  name: string;
  greet(): void;
}

class Student implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}
```

---

## 🔁 Extending Interfaces using `extends`

Just like inheritance, you can extend an interface:

```ts
interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  species: "Canine",
  breed: "Labrador",
};
```

You can even extend **multiple interfaces**:

```ts
interface A {
  a: string;
}

interface B {
  b: number;
}

interface C extends A, B {
  c: boolean;
}

const test: C = {
  a: "hello",
  b: 42,
  c: true,
};
```

---

## 🔄 `type` vs `interface`

| Feature                            | `interface`       | `type`                          |
| ---------------------------------- | ----------------- | ------------------------------- |
| Used for                           | Object structures | Objects, primitives, unions     |
| Extending                          | `extends` keyword | `extends` or `&` (intersection) |
| Declaration merging                | ✅ Yes             | ❌ No                            |
| React props                        | ✅ Preferred       | ✅ Works                         |
| More flexible (union/intersection) | ❌ No              | ✅ Yes                           |

---

### ✅ Example: Interface vs Type

```ts
// Using interface
interface User {
  name: string;
}

// Using type
type UserType = {
  name: string;
};
```

Both are similar in this case, but `type` is more flexible for unions:

```ts
type Status = "loading" | "success" | "error";
```

---

### ❌ Interface Cannot Do This:

```ts
// This will throw error in interface
type ID = string | number;

// Not possible: 
// interface ID = string | number ❌
```

---

## 🔧 When to Use What?

* Use **`interface`** when you are working with **object shapes** and **class contracts**.
* Use **`type`** when:

  * You need **union** or **intersection**
  * You want to create **complex type logic**
  * You are defining **primitives or tuples**

---

## ✅ Bonus: Multiple `implements` in class

```ts
interface A {
  a(): void;
}
interface B {
  b(): void;
}

class MyClass implements A, B {
  a() {
    console.log("Method A");
  }

  b() {
    console.log("Method B");
  }
}
```
