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
      <InputField todo={todo} setTodo={setTodo} />


    </div>
  );
};

export default App;
