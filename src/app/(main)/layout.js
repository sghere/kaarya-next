"use client";
import AppFooter from "@/components/AppFooter";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { getUser } from "@/utils";
import { useEffect } from "react";

// export const metadata = {
//   title: "Home",
//   description: "This is home",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <html lang="en" className="size-full">
      <body className="size-full flex flex-col bg-white text-[#292929] dark:text-white dark:bg-[#292929]">
        <Provider store={store}>
          <AppHeader />
          <div className="AppBody grow">{children}</div>
          <AppFooter />
        </Provider>
      </body>
    </html>
  );
}
