import React, { FC } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none";
  const primaryStyle = "bg-blue-500 text-white hover:bg-blue-600";
  const secondaryStyle = "bg-gray-500 text-white hover:bg-gray-600";

  const combinedClassName = `${baseStyle} ${
    variant === "primary" ? primaryStyle : secondaryStyle
  } ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

// Ensure a named export
export { Button };
