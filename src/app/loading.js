import React from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 size-full bg-black">
      <div className="grid place-items-center size-full">
        <BarLoader loading={true} color="white" />
      </div>
    </div>
  );
};

export default Loading;
