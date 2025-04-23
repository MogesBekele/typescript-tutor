import React from "react";

const InputField = () => {
  return (
    <form className="flex justify-between items-center bg-white p-3 rounded-2xl shadow-md w-1/2">
      <input type="text" placeholder="enter a task" />
      <button type="submit">GO</button>
    </form>
  );
};

export default InputField;
