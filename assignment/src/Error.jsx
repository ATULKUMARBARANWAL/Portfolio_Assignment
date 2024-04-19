import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="mx-auto h-screen flex justify-center items-center">
      <div className="max-w-xl w-full px-4">
        <img
          className="mx-auto mb-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaqkIba5oLQRiOrU6L5wPErJgOTV6QNj2zQ&s"
          alt="Error Image"
        />
        <button className="w-2/4 ml-40 h-12 flex justify-center items-center border border-solid border-blue-700 transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-md">
          <NavLink to="/">Go Back</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Error;
