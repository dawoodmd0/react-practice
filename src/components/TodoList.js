import { useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // CREATE
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  // DELETE
  const deleteTodo = (index) => {
    const newTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(newTodos);
  };

  // UPDATE
  const updateTodo = () => {
    const updatedTodos = [...todos];

    updatedTodos[editIndex] = todo;

    setTodos(updatedTodos);

    setTodo("");
    setEditIndex(null);
  };

  return (
    <div>
      <h2>Todo CRUD</h2>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      {editIndex !== null ? (
        <button onClick={updateTodo}>
          Update
        </button>
      ) : (
        <button onClick={addTodo}>
          Add
        </button>
      )}

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}

            <button
              onClick={() => {
                setTodo(item);
                setEditIndex(index);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;