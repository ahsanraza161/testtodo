import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Items from './components/Items';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <Items todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
