import { useEffect , useState } from "react";

export function useOrigin(){
    const [origin , setOrigin] = useState("")

    useEffect(()=>{
        if(typeof window !== "undefined"){
            setOrigin(window.location.origin)
        }
    },[])

    return origin;
}