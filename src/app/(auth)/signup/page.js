"use client";

import { supabase } from "@/utils/supabase";

const SignUp = () => {
  return (
    <div className="bg-background-950">
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const email = formData.get("email");
          const password = formData.get("password");
          const name = formData.get("name");
          signUp({ email, password, name });
          console.log({ e });
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const signUp = async ({ email, password, name }) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error("Error signing up:", error.message);
    return;
  }

  // const userId = data?.user?.id;

  // console.log({ data, error });

  // if (userId) {
  //   const { error: insertError } = await supabase.from("users").insert([
  //     {
  //       id: userId, // Same ID as auth.users
  //       email,
  //       name,
  //       created_at: new Date(),
  //     },
  //   ]);

  //   if (insertError) {
  //     console.error("Database Insert Error:", insertError.message);
  //     return { error: insertError };
  //   }
  // }

  return { data };
};

export default SignUp;
