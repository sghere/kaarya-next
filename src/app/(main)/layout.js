"use client";
import AppFooter from "@/components/AppFooter";
import "../global.css";
import AppHeader from "@/components/AppHeader";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="size-full ">
      <body className="size-full flex flex-col bg-secondary-100 text-primary-950 ">
        <Provider store={store}>
          <AppHeader />
          <div className="AppBody p-4 grow">{children}</div>
          <AppFooter />
        </Provider>
      </body>
    </html>
  );
}
