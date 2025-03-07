export default function RootLayout({ children }) {
  return (
    <html lang="en" className="size-full">
      <body className="size-full flex flex-col bg-white text-[#292929] dark:text-white dark:bg-[#292929]">
        {children}
      </body>
    </html>
  );
}
