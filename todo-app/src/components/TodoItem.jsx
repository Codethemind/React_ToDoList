import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo, likeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
        ✏️
      </button>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        🗑️
      </button>
      <button className="like-btn" onClick={() => likeTodo(todo.id)}>
        👍 {todo.likes}
      </button>
    </li>
  );
};

export default TodoItem;
