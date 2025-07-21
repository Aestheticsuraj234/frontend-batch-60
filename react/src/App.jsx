import React, { useEffect, useRef, useState , useMemo , useCallback } from "react";
import Navbar from "./Navbar";

// const nums = new Array(30_00_0000).fill(0).map((_ ,i)=>{
//   return{
//     index:i,
//     isMagical:i===29_00_0000
//   }
// })

const App = () => {
  const [count, setCount] = React.useState(0);
  const [adjective , setAdjective] = useState("Good")
  // const [numbers , setNumbers] = useState(nums)
  


  // const magical = useMemo(()=>numbers.find(item=>item.isMagical) , [])

  const getAdjective = useCallback(()=>{
    return "Another"
  },[])
 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800 text-white">
      
      <Navbar adjective={adjective} getAdjective={getAdjective}/>

    <button onClick={()=>setAdjective("Suraj")}>
      Change Value
    </button>

      <div className="flex flex-row items-center justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + Add
        </button>
        <span className="text-2xl font-bold">{count} </span>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          - Remove
        </button>

       
      </div>
    </div>
  );
};

export default App;
