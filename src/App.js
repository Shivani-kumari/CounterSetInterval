import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(0.5);

  
  useEffect(() => {
    let Inerval = setInterval(() => {
      setCount(count+1);
    }, 1000);
    return () => {
      clearInterval(Inerval);
    };
  }, [count]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>Count : {count}</h1>
      <h1>Count1 : {count/2}</h1>
    </div>
  );
}
