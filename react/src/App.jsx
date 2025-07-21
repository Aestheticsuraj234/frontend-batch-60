import React, { useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  const countRef = useRef(0);
  const btnRef = useRef();


  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log("Rendering App component" , countRef.current);
  });

  const onChangeColor = ()=>{
    btnRef.current.style.backgroundColor = "Red"
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800 text-white">
      <div className="flex flex-row items-center justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + Add
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          - Remove
        </button>

        <button ref={btnRef} onClick={onChangeColor}>
          change color to red
        </button>
      </div>
    </div>
  );
};

export default App;
