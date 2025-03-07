export const metadata = {
  title: "Auth",
  description: "This is Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="size-full">
      <body className="size-full flex flex-col bg-white text-[#292929] dark:text-white dark:bg-[#292929]">
        <div className="AppBody grow">{children}</div>
      </body>
    </html>
  ); // No AppHeader or AppFooter
}
