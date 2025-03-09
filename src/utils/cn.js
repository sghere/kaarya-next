import { twMerge } from "tailwind-merge";

export const cn = (...object) => {
  const className = twMerge(object);
  return className;
};
