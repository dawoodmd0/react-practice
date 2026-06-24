import React, {useState} from "react";

function Todo(){
   const [todos,setTodos] = useState([]);
   const [todo,setTodo] = useState("");
   const [editIdex,setEditIndex] = useState(null);
   
   const addTodo = ()  =>{

       if(todo.trim() !== ""){
            setTodos([...todos,todo])
            setTodo("");
       }
   }

   const updatedTodos = (index) =>{
       const original = [...todos];

       original[index] = todo;

       setTodos(original);
       setEditIndex(null);
       setTodo("");
   }

   const deletTodo = (deleteIndex) => {
         const deletedTodo = todos.filter((_,i) => i!== deleteIndex);
         setTodos(deletedTodo);
   };

   return(
    <div>
        <h1>CRUD Operation Todo List</h1>

        <input name="todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>

        <button onClick={addTodo}>Add</button>
        <button onClick={updatedTodos}>Update</button>

        <ul>
            <li key={index}>
                {todo}
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
        </ul>
    </div>
   );
}

export default Todo;