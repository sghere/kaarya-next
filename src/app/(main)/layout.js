"use client";
import AppFooter from "@/components/AppFooter";
import "../global.css";
import AppHeader from "@/components/AppHeader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

// export const metadata = {
//   title: "Home",
//   description: "This is home",
// };

export default function RootLayout({ children }) {
  const [User, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      if (!session?.user) window.location.href = "/login";
    };

    fetchUser();

    // Listen for auth changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        if (!session?.user) window.location.href = "/login";
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  return (
    <html lang="en" className="size-full">
      <body className="size-full flex flex-col bg-white text-background-950 dark:text-white dark:bg-background-950">
        <Provider store={store}>
          <AppHeader />
          <div className="AppBody grow">{children}</div>
          <AppFooter />
        </Provider>
      </body>
    </html>
  );
}
