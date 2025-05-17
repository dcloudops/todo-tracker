import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li className={todo.completed ? 'todo-item completed' : 'todo-item'}>
      <div className="todo-text" onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </div>
      <button className="delete-button" onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;