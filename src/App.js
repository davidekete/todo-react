import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/loading";
import TodoList from "./components/TodoList";

import createMockServer from "./mock";
createMockServer();

function App() {
  const [todos, setTodos] = useState(null);
  const [userTodo, setUserTodo] = useState("");

  const fetchApiData = function (path) {
    axios.get("/api/todos").then((result) => {
      setTodos(result.data);
    }).then(()=> console.log(todos) )
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      title: userTodo,
    };

    const options = { headers: { accept: "application/json" } };
    axios.post("/api/todos/new", body, options).then((res) => {
      fetchApiData();
    });


    setUserTodo("");
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="app">
      <div className="todos-container">
        {todos ? (
          <TodoList
            todos={todos}
            handleSubmit={handleSubmit}
            setUserTodo={setUserTodo}
            userTodo={userTodo}
            setTodos={setTodos}
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
