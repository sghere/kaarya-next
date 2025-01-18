import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { SessionProvider } from "next-auth/react";

const AppLayout = ({ children }) => {
  return (
    <>
      <SessionProvider>
        <AppHeader />
        {children}
        <AppFooter />
      </SessionProvider>
    </>
  );
};

export default AppLayout;
