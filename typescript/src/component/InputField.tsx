import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // use this type for setState function
  handleAdd: () => void; // use this type for the function that handles form submission

}
const InputField = ({ todo, setTodo, handleAdd}:Props) => {
  return (
    <form onSubmit={handleAdd} className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md w-full max-w-md mx-auto mt-6">
      <input
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="flex-1 border border-gray-300 rounded-lg p-2 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        GO
      </button>

    </form>
  );
};

export default InputField;
