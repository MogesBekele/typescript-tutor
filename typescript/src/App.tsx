import React, { useState } from "react";
import InputField from "./component/InputField";

import TodoList from "./component/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null); // Track the task being edited

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      // Update the task if in edit mode
      setTodos(
        todos.map((t) => (t.id === editId ? { ...t, todo: todo.trim() } : t))
      );
      setEditId(null); // Exit edit mode
    } else if (todo.trim()) {
      // Add a new task
      setTodos([
        ...todos,
        { id: Date.now(), todo: todo.trim(), isDone: false },
      ]);
    }
    setTodo(""); // Clear the input field
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
        Todo List App
      </h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
