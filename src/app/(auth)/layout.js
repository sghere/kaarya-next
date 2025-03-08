"use client";
import { useEffect, useState } from "react";
import "../global.css";
import { supabase } from "@/utils/supabase";
// export const metadata = {
//   title: "Auth",
//   description: "This is Auth",
// };

export default function RootLayout({ children }) {
  const [User, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    fetchUser();

    // Listen for auth changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  if (User) window.location.href = "/";

  return (
    <html lang="en" className="size-full">
      <body className="size-full grid items-center bg-white text-background-950 dark:text-white dark:bg-background-950">
        <div className="AppBody">{children}</div>
      </body>
    </html>
  ); // No AppHeader or AppFooter
}
