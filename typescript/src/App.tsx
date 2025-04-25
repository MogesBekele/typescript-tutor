import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./Model";
import TodoList from "./component/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null); // Track the task being edited



  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
        Todo List App
      </h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList/>

     
    </div>
  );
};

export default App;
