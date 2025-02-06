import { signIn } from "@/auth";
import Button from "@/common/components/Button";
import Link from "next/link";
import SignUp from "../signup/page";

const Login = () => {
  // if (constants.isAuthenticated) return <Navigate to="/" />;
  return (
    <div className=" flex flex-col items-center justify-center fixed top-0 left-0 bg-black size-full z-10 p-10 gap-10 ">
      <h1 className="font-bold text-3xl">Login to your account</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
        className="form grid gap-4 items-baseline w-full"
      >
        <input
          type="email"
          maxLength={50}
          className="bg-primary-700 rounded-lg p-4 pl-16"
          placeholder="Email"
        />
        <input
          type="password"
          maxLength={50}
          placeholder="Password"
          className="bg-primary-700 rounded-lg p-4 pl-16"
        />
        <Button type="submit" size="large" className="py-4">
          Login
        </Button>
        <Link href={"/signup"}>Need an account? Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
