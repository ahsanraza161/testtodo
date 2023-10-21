import React from 'react';

function Form({ input, setInput, todos, setTodos }) {
  const setNewInput = (event) => {
    setInput(event.target.value);
  };

  const mainForm = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <form onSubmit={mainForm}>
      <div className="mainFormDiv">
        <input
          type="text"
          className="mainInput"
          value={input}
          onChange={setNewInput}
        />
        <button type="submit" className="addBtn">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
