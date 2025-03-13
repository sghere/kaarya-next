"use client";
import Button from "@/components/common/Button";
import useApiState from "@/hooks/useApiState";
import { addBalance } from "@/thunks/apiThunks";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const AddCredits = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { loading } = useApiState("addBalance");
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter no of credits" />
      <Button
        variant="secondary"
        loading={loading}
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
