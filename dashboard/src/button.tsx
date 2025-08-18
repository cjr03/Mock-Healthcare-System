import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 ${className}`}
      {...props}
    />
  );
}