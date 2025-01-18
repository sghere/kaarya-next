"use client";
import { useSession } from "next-auth/react";

const Preferences = () => {
  const { data, status } = useSession();
  console.log({ data, status });
  return <div>Preferences</div>;
};

export default Preferences;
