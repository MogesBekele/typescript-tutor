import React from 'react'

let name: string;

name = 'sjs'

let age: number;
age =38
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age: number;
}

let person: Person ={
  name: 'sjs',
  age: 38
}

const App = () => {
  return (
    <div>App</div>
  )
}

export default App