import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { useState } from "react";

const TodoElement = (props) => {
  return (
    <li>
      {props.content}
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
};

const AddTodo = (props) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.add}>add</button>
    </div>
  );
};

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const add = () => {
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h1>TODO App</h1>
      <AddTodo value={value} onChange={handleChange} add={add} />
      <ul>
        {todoList.map((todo) => (
          <TodoElement
            key={todo.id}
            content={todo.content}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
