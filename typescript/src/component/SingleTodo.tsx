import React from 'react'
import { Todo } from '../Model'
type Props={
todo: Todo;
todos: Todo[];
setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // use this type for setState function
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
  <form >
    <span>{todo.todo}</span>
    
  </form>
  )
}

export default SingleTodo