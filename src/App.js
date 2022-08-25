/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './components/loading';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/').then((result) => {
      setTodos(result.data);
    });
  }, []);

  return (
    <div className=" bg-secondary">
      <div className="app">
        <div className="">
          {todos ? <TodoList todos={todos} /> : <Loading />}
        </div>
      </div>

    </div>

  );
}

export default App;
