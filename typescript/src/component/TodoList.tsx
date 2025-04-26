import React from "react";
import { Todo } from "../Model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // use this type for setState function
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-col items-center mt-8 w-full max-w-md">
      {
        todos.map((todo)=>(
          <SingleTodo/>
        ))
      }

    </div>
  );
};

export default TodoList;
