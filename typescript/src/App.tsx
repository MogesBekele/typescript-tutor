import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./model";




const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);
  
  return <div>

    <InputField todo= {todo} setTodo={setTodo} />
    
    
  </div>;
};

export default App;

