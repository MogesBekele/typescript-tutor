import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./Model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

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
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
        Todo List App
      </h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <div className="flex flex-col items-center mt-8">
        {todos.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              No tasks available
            </h2>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mb-4 flex justify-between items-center"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {todo.todo}
              </h2>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          ))
        )}

        {todos.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => setTodos([])}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Delete All
            </button>
            <button
              onClick={() => setTodos(todos.filter((todo) => !todo.isDone))}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Delete Completed
            </button>
            <button
              onClick={() => setTodos(todos.filter((todo) => todo.isDone))}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Show Completed
            </button>
            <button
              onClick={() => setTodos(todos.filter((todo) => !todo.isDone))}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
            >
              Show Uncompleted
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
