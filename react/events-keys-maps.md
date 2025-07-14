

## ✅ 1. **Events in ReactJS**

### 🔹 What are Events in React?

Just like in vanilla JavaScript, events in React are used to handle user interactions like clicks, form submissions, mouse movement, etc.

However, React uses **synthetic events**, a wrapper around the browser’s native events, for cross-browser compatibility and performance.

---

### 🔹 Syntax for Handling Events

```jsx
<button onClick={handleClick}>Click Me</button>
```

* `onClick` is a React event.
* `handleClick` is a callback function triggered when the button is clicked.

---

### 🔹 Common Event Types

| Event Name     | Description                     |
| -------------- | ------------------------------- |
| `onClick`      | When an element is clicked      |
| `onChange`     | When the value of input changes |
| `onSubmit`     | When a form is submitted        |
| `onMouseEnter` | When mouse enters the element   |
| `onKeyDown`    | When a keyboard key is pressed  |

---

### 🔹 Example: Handling Button Click

```jsx
import React from 'react';

function ClickExample() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

### 🔹 Example: Handling Input Change

```jsx
import React, { useState } from 'react';

function InputExample() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}
```

---

## ✅ 2. **Conditional Rendering**

### 🔹 What is Conditional Rendering?

In React, **conditional rendering** means rendering components or elements based on certain conditions, like:

* If user is logged in or not
* Showing a loader while data is being fetched
* Displaying errors if any

---

### 🔹 Techniques for Conditional Rendering

#### ✅ 1. **Using if-else inside function**

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}
```

---

#### ✅ 2. **Using Ternary Operator**

```jsx
function UserStatus({ isOnline }) {
  return (
    <p>{isOnline ? "User is Online" : "User is Offline"}</p>
  );
}
```

---

#### ✅ 3. **Using Logical AND (&&)**

```jsx
function Notification({ unreadMessages }) {
  return (
    <div>
      <h1>Inbox</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
}
```

---

#### ✅ 4. **Conditional Component Rendering**

```jsx
function App({ isLoggedIn }) {
  return isLoggedIn ? <Dashboard /> : <Login />;
}
```

---

## ✅ 3. **Map and Key in React**

### 🔹 What is `.map()` in React?

React doesn’t have its own iteration method, so we use JavaScript’s `.map()` to render lists.

---

### 🔹 Why is `key` Important?

* Keys help React identify which items changed, added, or removed.
* It **boosts performance** and avoids unnecessary re-renders.
* **Never use index as key** unless you are 100% sure the list order won’t change.

---

### 🔹 Basic Example: Rendering a List

```jsx
import React from 'react';

function FruitsList() {
  const fruits = ['Apple', 'Banana', 'Mango'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={fruit}>{fruit}</li> // using fruit name as key
      ))}
    </ul>
  );
}
```

---

### 🔹 Example: Rendering a List of Objects

```jsx
import React from 'react';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

function UserList() {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </div>
  );
}
```

---

### ❗ Best Practices for `key`

* Use **unique ID** if available (preferred).
* Avoid using index of array in `.map()` as key if list can change.
* Key should be assigned to the **outermost element** in the `.map()` return.

---

## ✅ Summary Table

| Concept                   | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| **Events**                | User interactions like click, input, submit. Handled using JSX props like `onClick` |
| **Conditional Rendering** | Render components based on condition using `if`, ternary, or `&&`.                  |
| **map + key**             | Iterate over arrays to render multiple elements. Use `key` for uniqueness.          |

