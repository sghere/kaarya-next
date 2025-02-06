import Link from "next/link";
import AppLayout from "./components/AppLayout";
import "./globals.css";
import SignUp from "./signup/page";

export const metadata = {
  title: "Kaarya",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
      
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
