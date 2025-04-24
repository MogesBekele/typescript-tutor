import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // use this type for setState function
  handleAdd: (e: React.FormEvent) => void; // use this type for the function that handles form submission
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input field

  const handleSubmit = (e: React.FormEvent) => {
    handleAdd(e); // Call the parent handleAdd function
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field after submitting
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md w-full max-w-md mx-auto mt-6"
    >
      <input
        ref={inputRef} // Attach the ref to the input field
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // Update the todo state with the input value
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
