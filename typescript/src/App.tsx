import React from 'react'

let name: string;

name = 'sjs'

let age: number | string;
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

let lotsOfPeople: Person[] = []

let printName : Function;



const App = () => {
  return (
    <div>
   <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">My First React App</h1>
      <p className="text-lg text-gray-700 mb-2">It's working!</p>
      <p className="text-gray-800 mb-2">Name: <span className="font-medium">{name}</span></p>
      <p className="text-gray-800 mb-2">Age: <span className="font-medium">{age}</span></p>
      <p className="text-gray-800 mb-2">Hobby: <span className="font-medium">{hobbies[0]}</span></p>
      <p className="text-gray-800 mb-2">Role ID: <span className="font-medium">{role[0]}</span></p>
      <p className="text-gray-800 mb-2">Person Name: <span className="font-medium">{person.name}</span></p>
    </div>





    </div>

  )
}

export default App