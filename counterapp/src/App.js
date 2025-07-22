import React,{useState} from "react";
import "./App.css";
const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button className="button" onClick={() => setNumber(number+1)} >Increment</button>
      <button className="button" onClick={() => setNumber(number-1)}>Decrement</button>
      <button className="button" onClick={() => setNumber(0)}>Reset</button>
    </div>
  );
};

export default App;
