
import { useState } from 'react';
import './App.css';

function App() {
  const [diceNumber, setDiceNumber] = useState(6);

  const refreshDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };
  return (
   <div>
    <center>
    <img width={300} height={300} src = {require(`./assets/${diceNumber}.png`)} />
    <br />
<button className="button" onClick = {()=> refreshDice()}>Roll Dice</button>
    </center>
   </div>
  );
}

export default App;
