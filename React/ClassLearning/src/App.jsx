import React from "react";
import { useState } from "react";

function App() {
  const [dev, setDev] = useState("bg-red-500");

  const [count, setCount] = useState(0);
  const om = () => {
    if (count % 2 == 0) {
      setDev("bg-yellow-500");
      console.log(count + " --> " + (count + 1));

      setCount(count + 1);
    } else {
      setDev("bg-red-500");
      console.log(count + " --> " + (count + 1));
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className={`${dev} h-screen p-5 `}>
        <button className="border bg-blue-500" onClick={om}>
          Click
        </button>
      </div>
    </>
  );
}

export default App;
