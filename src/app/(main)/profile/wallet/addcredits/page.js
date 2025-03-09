"use client";
import Button from "@/components/Button";
import { addBalance } from "@/thunks/apiThunks";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const AddCredits = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter no of credits" />
      <Button
        variant="secondary"
        onClick={() => {
          dispatch(
            addBalance({ type: "ADD", data: inputRef.current.value || 0 })
          );
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddCredits;
