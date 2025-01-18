"use client";

import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  "px-4 py-2 font-semibold bg-primary-700 transition text-white rounded",
  {
    variants: {
      intent: {
        default:
          "bg-primary-700 rounded-lg text-primary-200 hover:bg-primary-800 hover:text-white",
        failureAlt:
          "bg-transperant text-red-500 border border-gray-300 hover:bg-red-500 hover:border-red-500 hover:text-white",
        icon: "p-2 rounded-lg",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg py-4",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "small",
    },
  }
);

const Button = ({ intent, size, children, className, ...props }) => {
  return (
    <button
      className={twMerge(buttonStyles({ intent, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
