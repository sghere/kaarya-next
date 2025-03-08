import Button from "@/components/Button";
import React from "react";

const AddCredits = () => {
  return (
    <div>
      <input type="text" placeholder="Enter no of credits" />
      <Button variant="secondary">Add</Button>
    </div>
  );
};

export default AddCredits;
