import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "px-4 cursor-pointer py-2 rounded-lg transition-all",
  {
    variants: {
      variant: {
        gradient:
          "bg-gradient-to-b border border-primary-800 from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 hover:border-primary-900 active:from-primary-800 active:to-primary-900 active:border-primary-900 active:bg-primary-950 disabled:bg-primary-100 disabled:text-primary-400 disabled:border-primary-400 disabled:cursor-not-allowed disabled:from-unset disabled:to-unset disabled:border-unset disabled:pointer-events-none",
        light:
          "bg-primary-200 text-primary-950 hover:bg-primary-300 active:bg-primary-400 disabled:bg-primary-100 disabled:text-primary-400 disabled:pointer-events-none",
        solid:
          "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-100 disabled:text-primary-400 disabled:pointer-events-none",
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        outline: "border hover:bg-primary-800",
        failed: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
        box: "p-2",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

export function Button({
  variant,
  size,
  className,
  loading = false,
  children,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className, {
        "disabled pointer-events-none cursor-wait": loading,
      })}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
