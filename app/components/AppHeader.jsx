"use client";

import { signIn } from "next-auth/react";
import Button from "@/common/components/Button";
import { pages } from "@/common/constants";
import { usePathname, useRouter } from "next/navigation";
import { BsChevronLeft, BsThreeDots } from "react-icons/bs";

const AppHeader = () => {
  const pathName = usePathname();
  const pagePath = pathName.split("/");
  const pageName = pagePath[pagePath.length - 1];
  const displayPageName = pages[pageName]?.title || "Home";

  const router = useRouter();
  return (
    <div className="h-[80px] pt-6 flex items-center justify-between px-10">
      <Button intent="icon" onClick={() => router.back()}>
        <BsChevronLeft />
      </Button>
      <h2 className="font-semibold text-2xl">{displayPageName}</h2>
      <BsThreeDots className="size-8 text-primary-300" />
    </div>
  );
};

export default AppHeader;
