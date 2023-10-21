import React from 'react';

function Items({ todos, setTodos }) {
  return (
    <>
      <ul>
        {setTodos.map((item) => (
          <li key={item.toString()}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Items;
