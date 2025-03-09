"use client";

import { setUser } from "@/redux/slices/userSlice";
import { supabase } from "@/utils/supabase";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { GoChevronLeft } from "react-icons/go";
import { useDispatch } from "react-redux";

const AppHeader = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const formattedTitle = lastSegment
    ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
    : "Home";

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      dispatch(setUser(session?.user || null));
      if (!session?.user) window.location.href = "/login";
    };

    fetchUser();

    // Listen for auth changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        dispatch(setUser(session?.user || null));
        if (!session?.user) window.location.href = "/login";
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);
  return (
    <header className="header flex items-center justify-between px-6 h-16 text-primary-950">
      <GoChevronLeft
        className="size-6 cursor-pointer"
        onClick={() => router.back()}
      />
      <h1 className="text-lg font-semibold text-center">
        {headerText[formattedTitle] || formattedTitle}
      </h1>
      {/* <GoChevronRight className="size-6" /> */}
      <label htmlFor=""></label>
    </header>
  );
};

const headerText = {
  Home: "Marketplace",
};

export default AppHeader;
