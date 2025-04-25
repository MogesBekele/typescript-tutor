import React from "react";
import { Todo } from "../Model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // use this type for setState function
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-col items-center mt-8 w-full max-w-md">
      {todos.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            No tasks available
          </h2>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-full mb-4 flex justify-between items-center"
          >
            <h2 className="text-lg font-semibold text-gray-800">{todo.todo}</h2>
            <button
              onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
