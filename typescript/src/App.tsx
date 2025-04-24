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
        </div>


    </div>
  );
};

export default App;
