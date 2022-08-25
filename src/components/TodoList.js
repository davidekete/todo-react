/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
function TodoList({ todos }) {
  return (
    <div className='todos'>
      <h1>I see you want a heading</h1>
      <ul className='list-group'>
        {todos.map((todo) => (
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            {todo.title}
            <input type='checkbox' checked={todo.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
