import React from 'react'

let name: string;

name = 'sjs'

let age: number;
age =38
let isStudent: boolean;
let hobbies: string[];
hobbies = ['sports', 'reading']
let role: [number, string];

role = [2, 'author']

type Person = {
  name: string;
  age?: number;
}

let person: Person ={
  name: 'sjs',
  age: 38
}

const App = () => {
  return (
    <div>
      <h1>Typescript</h1>
      <p>{name}</p>
      <p>{age}</p>
 
      <p>{hobbies}</p>
      <p>{role}</p>
      <p>{person.name}</p>



    </div>

  )
}

export default App