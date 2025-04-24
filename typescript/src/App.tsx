import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./Model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <div>
      <InputField todo={todo} setTodo={setTodo} handleAdd= {handleAdd}/>

      <div className="flex flex-col items-center mt-6">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mb-4">
            <h2 className="text-lg font-semibold">{todo.todo}</h2>
          </div>
        ))}

        {todos.length === 0 && (
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mb-4">
            <h2 className="text-lg font-semibold">No tasks available</h2>
          </div>
        )}
        {todos.map((todo) => (
          <button
            key={todo.id}
            onClick={() => handleDelete(todo.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>

        ))}
        {todos.length > 0 && (
          <button
            onClick={() => setTodos([])}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Delete All
          </button>
        )}
        {todos.length > 0 && (
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.isDone))}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Delete Completed
          </button>
        )}
        {todos.length > 0 && (
          <button
            onClick={() => setTodos(todos.filter((todo) => todo.isDone))}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Show Completed
          </button>
        )}
        {todos.length > 0 && (
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.isDone))}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Show Uncompleted
          </button>
        )}
        {todos.length > 0 && (
          <button
            onClick={() => setTodos(todos.filter((todo) => todo.isDone))}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
          >
            Show All
          </button>
        )}
        {todos.length > 0 && (
          <button
            onClick={() => setTodos(todos.filter((todo) => todo.isDone))}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
          >
            Show All
          </button>
        )}
        </div>


    </div>
  );
};

export default App;
