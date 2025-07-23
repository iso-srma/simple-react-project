import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState(["Eat", "code", "sleep", "repeat"]);

  return (
    <div>
      <h1>Todo App</h1>
      <p>Welcome to the Todo App!</p>
      <input type='text'></input>
      <button>Add</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
