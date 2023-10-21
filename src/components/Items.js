import React, { useState } from 'react';

function Items({ todos, setTodos }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [editedItem, setEditedItem] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedItem(todos[index]);
  };

  const handleSave = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editedItem;
    setTodos(newTodos);
    setEditIndex(-1);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editedItem}
                  onChange={(e) => setEditedItem(e.target.value)}
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </div>
            ) : (
              <div>
                {item}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Remove</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
