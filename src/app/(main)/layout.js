"use client";
import AppFooter from "@/components/Layouts/AppFooter";
import "../global.css";
import AppHeader from "@/components/Layouts/AppHeader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Suspense } from "react";
import Loading from "../loading";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="size-full ">
      <body className="size-full flex flex-col bg-secondary-100 text-primary-950 ">
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            <AppHeader />
            <div className="AppBody p-4 grow">{children}</div>
            <AppFooter />
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
