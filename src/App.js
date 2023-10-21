import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Items from './components/Items';

function App() {
  const [input, addInput] = useState('');
  const [todos, addTodos] = useState([]);

  return (
    <>
      <Header />
      <Form input={input} addInput={addInput} />
      <Items todos={todos} addTodos={addTodos} />
    </>
  );
}

export default App;
