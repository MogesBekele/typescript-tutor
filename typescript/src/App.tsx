import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./model";

let name: string;

// use any type and unknown type but dont use it

name = "sjs";

let age: number | string;
age = 38;
let isStudent: boolean;
let hobbies: string[];
hobbies = ["sports", "reading"];
let role: [number, string];

role = [2, "author"];

type Person = {
  name: string;
  age?: number;
};
interface Person2 {
  name: string;
  age?: number;
  [key: string]: any; // index signature
}
// the same as type but you can use extends and implements
// use interface alot if you want to use extends and implements

let person: Person = {
  name: "sjs",
  age: 38,
};

let printName: (name: string) => void;
// you can use never type

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  console.log(todo);
  
  return <div>

    <InputField todo= {todo} setTodo={setTodo} />
  </div>;
};

export default App;

