# React Context

## 🧠 What is `useContext`?

`useContext` is a **React Hook** that allows you to consume values from a **Context** directly, without using the `Context.Consumer` wrapper.

---

## ⚙️ When to Use `useContext`

Use `useContext` when you want to:

* Share data between deeply nested components (without prop drilling).
* Provide **global state**, like themes, authentication, user data, etc.
* Simplify access to data across components in the component tree.

---

## 🔧 How It Works

React Context API has two parts:

### 1. `React.createContext()`

Creates a context object.

```js
const ThemeContext = React.createContext(defaultValue);
```

### 2. `Context.Provider`

Wraps part of your component tree and provides the context value.

### 3. `useContext(Context)`

A hook to read the context value from a Provider.

---

## ✅ Basic Example

### Step 1: Create Context

```js
// ThemeContext.js
import { createContext } from "react";

export const ThemeContext = createContext("light");
```

### Step 2: Provide Context

```js
// App.js
import { ThemeContext } from "./ThemeContext";
import Dashboard from "./Dashboard";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Dashboard />
    </ThemeContext.Provider>
  );
}
```

### Step 3: Consume Context

```js
// Dashboard.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Dashboard() {
  const theme = useContext(ThemeContext);

  return <div className={`theme-${theme}`}>Dashboard with {theme} theme</div>;
}
```

---

## 🧪 Advanced Example: Context with State

### Context with state and updater function (like Redux/Store)

```js
// CounterContext.js
import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
```

### Using the Provider

```js
// App.js
import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
```

### Consuming with `useContext`

```js
// Counter.js
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 🧩 Best Practices

* ✅ Use separate files for `Context` and `Provider` (for scalability).
* ✅ Use context for **global state**, not for frequently changing local state (like form inputs).
* ❌ Avoid unnecessary re-renders: wrap values in `useMemo` if needed.
* ✅ Use TypeScript for better type safety.

---

## 🔥 Common Pitfalls

| Pitfall                           | Solution                                                                               |
| --------------------------------- | -------------------------------------------------------------------------------------- |
| **Component not rerendering**     | Make sure the context value changes (wrap with `useState`, `useReducer`, or `useMemo`) |
| **Too many re-renders**           | Use `React.memo`, `useMemo`, or context splitting                                      |
| **Context used outside Provider** | Always wrap with the Provider at the root                                              |

---

## 📦 Bonus: Using `useReducer` with `useContext` (Redux-like pattern)

```js
// AuthContext.js
import { createContext, useReducer } from "react";

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": return { ...state, user: action.payload };
    case "LOGOUT": return { ...state, user: null };
    default: return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: null });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
```

And then use:

```js
// LoginButton.js
import { useContext } from "react";
import AuthContext from "./AuthContext";

function LoginButton() {
  const { dispatch } = useContext(AuthContext);

  const login = () => dispatch({ type: "LOGIN", payload: { name: "Suraj" } });

  return <button onClick={login}>Login</button>;
}
```

---

## 🧠 Summary

| Term               | Description                  |
| ------------------ | ---------------------------- |
| `createContext`    | Creates a context            |
| `Context.Provider` | Provides context to children |
| `useContext`       | Reads context value          |


