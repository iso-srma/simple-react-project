import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addData = () => {
    if (userInput.trim() !== "") {
      setTodos([...todos, userInput]);
      setUserInput("");
    }
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <p>Welcome to the Todo App!</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addData}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
