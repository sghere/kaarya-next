import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...object) => {
  const className = twMerge(classNames(object));
  return className;
};
