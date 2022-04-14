import React from "react";

function Todo({ todo, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button data-testid="Done-btn" onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Not done" : "Done"}
        </button>
        <button data-testid="Delete-btn" onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
}

export default Todo;