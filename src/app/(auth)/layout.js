import "../global.css";
export const metadata = {
  title: "Auth",
  description: "This is Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="size-full">
      <body className="size-full grid items-center bg-white text-background-950 dark:text-white dark:bg-background-950">
        <div className="AppBody grow">{children}</div>
      </body>
    </html>
  ); // No AppHeader or AppFooter
}
