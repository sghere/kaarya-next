import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "px-4 cursor-pointer py-2 font-medium rounded-lg transition-all",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-100",
      },
      size: {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export default Button;
