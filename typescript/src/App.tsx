import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  return (
    <div>
      <InputField todo={todo} setTodo={setTodo} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
          <ul className="list-disc pl-5">
            {todos.map((todo) => (
              <li key={todo.id} className="mb-2">
                {todo.todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
