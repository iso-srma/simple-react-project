import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState(["Eat", "code", "sleep", "repeat"]);

  const addData = () => {
    setTodos([...todos, userInput])
  }
  
  return (
    <div>
      <h1>Todo App</h1>
      <p>Welcome to the Todo App!</p>
      <input type='text'></input>
      <button>Add</button>
      <ul>
        {todos.map((todo , index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
