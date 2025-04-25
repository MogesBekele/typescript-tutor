import React from 'react'
import { Todo } from '../Model'

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // use this type for setState function
}
const TodoList: React.FC = ({ todos, setTodos}) => {
  
  
  return (
    <div className="flex flex-col items-center mt-8">
      {todos.map((todo, index)=>(
        <li key={index} >{todo.todo}</li>
      ))}
   

      
      </div>
  )
}

export default TodoList