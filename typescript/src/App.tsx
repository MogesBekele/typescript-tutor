import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./Model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null); // Track the task being edited

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      // Update the task if in edit mode
      setTodos(
        todos.map((t) =>
          t.id === editId ? { ...t, todo: todo.trim() } : t
        )
      );
      setEditId(null); // Exit edit mode
    } else if (todo.trim()) {
      // Add a new task
      setTodos([...todos, { id: Date.now(), todo: todo.trim(), isDone: false }]);
    }
    setTodo(""); // Clear the input field
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (id: number) => {
    const taskToEdit = todos.find((todo) => todo.id === id);
    if (taskToEdit) {
      setTodo(taskToEdit.todo); // Set the input field to the task's current text
      setEditId(id); // Enter edit mode
    }
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
              className={`bg-white p-4 rounded-lg shadow-md w-full max-w-md mb-4 flex justify-between items-center ${
                todo.isDone ? "opacity-50" : ""
              }`}
            >
              <h2
                className={`text-lg font-semibold ${
                  todo.isDone ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {todo.todo}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`px-4 py-2 rounded-lg transition duration-200 ${
                    todo.isDone
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  }`}
                >
                  {todo.isDone ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
