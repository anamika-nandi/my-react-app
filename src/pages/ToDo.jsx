import React, { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSaveEdit = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
    setEditIndex(null);
  };

  return (
    <div className="ToDo">
      <p>user name</p>
      <div>
        <h2>Todos:</h2>
        {todos.map((todo, index) => (
          <div key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={todo}
                onChange={(e) => {
                  const newTodos = [...todos];
                  newTodos[index] = e.target.value;
                  setTodos(newTodos);
                }}
                onBlur={() => handleSaveEdit(index, todo)}
              />
            ) : (
              <input type="text" value={todo} readOnly />
            )}
            {editIndex === index ? (
              <button onClick={() => handleSaveEdit(index, todo)}>Save</button>
            ) : (
              <button onClick={() => handleEdit(index)}>Edit</button>
            )}
          </div>
        ))}
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
