import React, { useState } from 'react';
import './App.css';
import plusIcon from './assets/img/plus.svg';
import deleteIcon from './assets/img/delete.svg';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue === '') {
      alert('내용을 입력해주세요!');
      return;
    }

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false }
    ]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div id="wrap">
      <header id="header">
        <h1>TO-DO LIST</h1>
        <div className="add">
          <input
            type="text"
            placeholder="오늘 할 일을 입력해주세요!"
            className="addvalue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button id="addbtn" onClick={addTodo}>
            <img src={plusIcon} alt="add list" />
          </button>
        </div>
      </header>
      <main id="main">
        {todos.map((todo) => (
          <div key={todo.id} className="list">
            <div>
              <input
                type="checkbox"
                id={`checkbox-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <label htmlFor={`checkbox-${todo.id}`}>
                <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </p>
              </label>
            </div>
            <button onClick={() => removeTodo(todo.id)}>
              <img src={deleteIcon} alt="delete button" />
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;