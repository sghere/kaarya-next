import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Credits = () => {
  return (
    <div>
      <h3>10 Credits</h3>
      <Button>
        <Link href="/profile/credits/addcredits">Add Credits</Link>
      </Button>
    </div>
  );
};

export default Credits;
