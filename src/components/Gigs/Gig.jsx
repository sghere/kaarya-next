import React from "react";
import Button from "../common/Button";
import { formatDateTime } from "@/lib/utils/utils";
import { GoLocation } from "react-icons/go";

const Gig = ({ gig }) => {
  return (
    <div className="GigCard shadow border-l-8 py-7 px-5 border-l-primary-600  border bg-white border-gray-200 rounded-lg hover:bg-gray-50 transition">
      <div className="flex justify-between gap-10">
        <div className="details grid gap-2">
          <p className="text-gray-400 text-xs">{gig.category}</p>
          <h2 className="font-semibold text-xl hover:underline cursor-pointer hover:text-blue-500">
            {gig.title}
          </h2>
          <p>{gig.description}</p>
          <hr className="border-primary-100" />
          <p className="text-xs">
            {formatDateTime(gig.created_at)} | by {gig.user.email}
          </p>
          {gig?.location && (
            <p className="text-xs flex gap-1 items-center">
              <GoLocation />
              {gig?.location}
            </p>
          )}
        </div>
        <div className="Budget flex flex-col justify-between gap-2">
          <h4 className="font-bold text-xl">
            <span className="text-xs">INR</span> {gig.budget}
            <span className="text-xs">/hour</span>
          </h4>
          <Button variant="gradient">Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
