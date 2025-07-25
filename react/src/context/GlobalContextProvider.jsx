import { createContext , useState } from "react";

export const GlobalContext = createContext();


export const GlobalContextProvider = ({children})=>{

    const [username , setUsername] = useState("Suraj")


    return (
        <GlobalContext.Provider value={{username , setUsername}}>
            {children}
        </GlobalContext.Provider>
    )
}