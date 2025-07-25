import { useContext } from "react";
import {GlobalContext} from "./context/GlobalContextProvider";
import { useTheme } from "./context/ThemeContext";
import { useOrigin } from "./hooks/useOrigin";
function H1(){
    const {username , setUsername} = useContext(GlobalContext)
    const {theme , toggleTheme} = useTheme()
    const origin = useOrigin()
    return (
          <div className={`h-screen w-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl">Current theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
      >
        Toggle Theme
      </button>

      {origin}
    </div>
    )
}

export default H1;