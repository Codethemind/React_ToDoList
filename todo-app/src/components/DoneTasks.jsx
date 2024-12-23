import React from "react";

const DoneTasks = ({ todos }) => {
  return (
    <div className="done-tasks">
      <h2>Completed Tasks</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="completed-task">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoneTasks;
