/* eslint-disable */
// eslint-disable
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './components/loading';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((result) => {
      setTodos([result.data]);
    });
  }, []);

  return (
    <div className='app'>
      <div className='todos-container'>
        {todos ? <TodoList todos={todos} /> : <Loading />}
      </div>
    </div>
  );
}

export default App;
