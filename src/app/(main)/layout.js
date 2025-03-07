import AppFooter from "@/components/AppFooter";
import "./globals.css";
import AppHeader from "@/components/AppHeader";

export const metadata = {
  title: "Home",
  description: "This is home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="size-full">
      <body className="size-full flex flex-col bg-white text-[#292929] dark:text-white dark:bg-[#292929]">
        <AppHeader />
        <div className="AppBody grow">{children}</div>
        <AppFooter />
      </body>
    </html>
  );
}
