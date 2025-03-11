import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;