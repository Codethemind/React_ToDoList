import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
          likes: 0,
        },
      ]);
      setInputValue("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const likeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, likes: todo.likes + 1 } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              likeTodo={likeTodo}
            />
          ))}
      </ul>

      <div className="done-tasks">
        <h2>Done Tasks</h2>
        <ul>
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                likeTodo={likeTodo}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
