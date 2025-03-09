"use client";

import Button from "@/components/Button";
import { supabase } from "@/utils/supabase";

const SignIn = () => {
  return (
    <div className="bg-primary-50 p-4 rounded-lg">
      <h2 className="text-4xl font-medium">Sign In</h2>
      {/* <h3 className="text-2xl ">Create an account to get started</h3> */}
      <form
        className="pt-4 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const email = formData.get("email");
          const password = formData.get("password");
          signIn({
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
            className="border h-10 p-2 pl-4 font-medium rounded-lg text-lg border-gray-300"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            className="border h-10 p-2 pl-4 font-medium rounded-lg text-lg border-gray-300"
            id="password"
            name="password"
            required
          />
        </div>

        <Button variant="solid" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
};

const signIn = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log({ error });
    alert("Error signing in: " + error.message);
    return;
  }
  return { data };
};

export default SignIn;
