"use client";

import Button from "@/components/Button";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="bg-primary-50 p-4 rounded-lg">
      <h2 className="text-4xl font-medium">Sign up</h2>
      <h3 className="text-sm pt-2 ">Create an account to start working</h3>
      <form
        className="pt-4 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const email = formData.get("email");
          const password = formData.get("password");
          const name = formData.get("name");
          signUp({
            email,
            password,
          });
        }}
      >
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            className="border bg-white h-10 p-2 pl-4 font-medium rounded-lg text-lg border-gray-300"
            id="email"
            name="email"
            required
            autoComplete={"off"}
            placeholder="example@gmail.com"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Set a password
          </label>
          <input
            type="password"
            className="border bg-white h-10 p-2 pl-4 font-medium rounded-lg text-lg border-gray-300"
            id="password"
            name="password"
            required
            autoComplete="new-password"
            placeholder="••••••••••••••••"
          />
          <label className="text-gray-400 text-xs pt-2">
            Already have an account ?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-500">
              Sign in
            </Link>
          </label>
        </div>

        <Button variant="solid" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

const signUp = async ({ email, password, otherDetails }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: otherDetails,
    },
  });
  if (error) {
    alert("Error signing up: " + error.message);
    return;
  }
  return { data };
};

export default SignUp;
