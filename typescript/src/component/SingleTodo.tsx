import React from "react";
import { Todo } from "../Model";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // use this type for setState function
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md w-full mb-4">
      <span
        className={`text-lg font-semibold ${
          todo.isDone ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.todo}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition duration-200"
        >
          <AiOutlineCheck />
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-200"
        >
          <MdDelete />
        </button>
        <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 transition duration-200">
          <CiEdit />
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
