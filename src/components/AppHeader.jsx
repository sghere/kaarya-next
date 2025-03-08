"use client";

import { usePathname, useRouter } from "next/navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const AppHeader = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const formattedTitle = lastSegment
    ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
    : "Home";

  const router = useRouter();
  return (
    <header className="header flex items-center justify-between px-6 h-16 text-white">
      <GoChevronLeft
        className="size-6 cursor-pointer"
        onClick={() => router.back()}
      />
      <h1 className="text-lg font-semibold text-center">{formattedTitle}</h1>
      {/* <GoChevronRight className="size-6" /> */}
      <label htmlFor=""></label>
    </header>
  );
};

export default AppHeader;
