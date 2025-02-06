"use client";
import React, { useState } from "react";

import Button from "@/common/components/Button";
import Link from "next/link";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const handlepass = (e) => {
    setPassword(e.target.value);
  };
  const handleOption = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleChange = (e) => {
    setConfirmPassword(e.target.value);
    {
      setPassword !== confirmPassword ? setPasswordMismatch(true) : "";
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center fixed top-0 left-0 bg-black size-full z-10 p-10 gap-10 ">
      <h1 className="font-bold text-3xl">Sign Up</h1>
      <form
        //    {passwordMismatch && <p>Passwords do not MATCH !</p>}
        // action={async () => {
        //   "use server";
        //   await signIn("google", { redirectTo: "/" });
        // }
        className="form grid gap-4 items-baseline w-full"
      >
        Role
        <select
          className="bg-primary-700 rounded-lg p-4 pl-16"
          value={selectedOption}
          onChange={handleOption}
        >
          <option
            className="bg-primary-700 rounded-lg p-4 pl-16"
            value="option1"
          >
            Select
          </option>
          <option
            className="bg-primary-700 rounded-lg p-4 pl-16"
            value="optio2"
          >
            Customer
          </option>
          <option
            className="bg-primary-700 rounded-lg p-4 pl-16"
            value="option3"
          >
            Worker
          </option>
        </select>
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
          value={password}
          onChange={handlepass}
          autoComplete="new password"
        />
        <input
          type="password"
          maxLength={50}
          placeholder="Password"
          className="bg-primary-700 rounded-lg p-4 pl-16"
          value={confirmPassword}
          //   onError={passwordMismatch}
          onChange={handleChange}
          autoComplete="new password"
        />
        {passwordMismatch && (
          <p className="text-red-500">Passwords do not match!</p>
        )}
        <Button type="submit" size="large" className="py-4">
          Sign Up
        </Button>
        {/* <Link href={"/"}> Log In</Link> */}
      </form>
    </div>
  );
};

export default SignUp;
