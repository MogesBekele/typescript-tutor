import React from 'react'
import { Todo } from '../Model'

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // use this type for setState function
}
const TodoList: React.FC = ({todo, todos, setTodos}) => {
  
  
  return (
    <div className="flex flex-col items-center mt-8">
        {todos.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              No tasks available
            </h2>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`bg-white p-4 rounded-lg shadow-md w-full max-w-md mb-4 flex justify-between items-center ${
                todo.isDone ? "opacity-50" : ""
              }`}
            >
              <h2
                className={`text-lg font-semibold ${
                  todo.isDone ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {todo.todo}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`px-4 py-2 rounded-lg transition duration-200 ${
                    todo.isDone
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  }`}
                >
                  {todo.isDone ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        {todos.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => setTodos([])}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Delete All
            </button>
            <button
              onClick={() => setTodos(todos.filter((todo) => !todo.isDone))}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Delete Completed
            </button>
          </div>
        )}
      </div>
  )
}

export default TodoList