import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider, NavLink ,Link} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <h1>Home</h1>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <h1>Login</h1>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <h1>About</h1>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>About</li>
        </NavLink>
        <NavLink to={"/login"}>
          <li>Login</li>
        </NavLink>
      </nav>
    </div>
  );
}
