import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded cursor-pointer">
          {children}
    </button>
  );
};

export default Button;
