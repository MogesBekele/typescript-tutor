import React, { useState, useRef } from "react";
import { Todo } from "../Model";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false); // Track edit mode
  const [editText, setEditText] = useState<string>(todo.todo); // Track the edited text
  const inputRef = useRef<HTMLInputElement>(null); // Ref for the input field

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, todo: editText.trim() } : t))
    );
    setIsEditing(false); // Exit edit mode
  };

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md w-full mb-4"
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span
          className={`text-lg font-semibold ${
            todo.isDone ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.todo}
        </span>
      )}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setIsEditing(!isEditing); // Toggle edit mode
            if (!isEditing) {
              inputRef.current?.focus(); // Focus the input field when entering edit mode
            }
          }}
          className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          <MdEdit />
        </button>
        <button
          type="button"
          onClick={() => toggleComplete(todo.id)}
          className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition duration-200"
        >
          <AiOutlineCheck />
        </button>
        <button
          type="button"
          onClick={() => handleDelete(todo.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-200"
        >
          <MdDelete />
        </button>
      </div>
    </form>
  );
};

export default SingleTodo;
