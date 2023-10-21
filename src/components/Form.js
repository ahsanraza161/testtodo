import React from 'react';

function Form({ input, addInput, todos, setTodos }) {
  const setNewInput = (event) => {
    addInput(event.target.value);
  };

  const mainForm = (e) => {
    e.preventDefault();
  };
  function addTodo() {
    return setTodos([...todos, input]);
  }
  return (
    <form onSubmit={mainForm}>
      <div className="mainFormDiv">
        <input
          type="text"
          className="mainInput"
          value={input}
          onChange={setNewInput}
        />
        <button className="addBtn" onClick={addTodo}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
