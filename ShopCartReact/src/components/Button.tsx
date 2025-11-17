import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-amber-400 hover:bg-amber-500 p-2 rounded-md text-white font-semibold">
      {children}
    </button>
  );
};

export default Button;
