import React from "react";

export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors 
                  bg-black text-white hover:bg-gray-800 ${className}`}
    >
      {children}
    </button>
  );
}
