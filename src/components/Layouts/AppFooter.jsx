import Link from "next/link";
import {
  GoBriefcase,
  GoComment,
  GoHome,
  GoPerson,
  GoPlusCircle,
} from "react-icons/go";

const AppFooter = () => {
  return (
    <footer className="footer h-20 flex gap-2 justify-evenly items-center">
      <FooterLink Icon={GoHome} href="/" />
      <FooterLink Icon={GoBriefcase} href="/gigs" />
      <FooterLink Icon={GoPlusCircle} href="/post" />
      <FooterLink Icon={GoComment} href="/messages" />
      <FooterLink Icon={GoPerson} href="/profile" />
    </footer>
  );
};

const FooterLink = ({ Icon = () => {}, href = "" }) => {
  return (
    <Link href={href} className="grid items-center">
      {<Icon className="size-6 hover:text-gray-300 transition" />}
    </Link>
  );
};

export default AppFooter;
