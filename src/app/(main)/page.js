"use client";

import useApiState from "@/hooks/useApiState";
import { getGigs } from "@/thunks/apiThunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Gig } from "./gigs/page";

export default function Home() {
  const dispatch = useDispatch();
  const { data, error, loading } = useApiState("getGigs");
  useEffect(() => {
    dispatch(
      getGigs({
        type: "GETALL",
      })
    );
  }, []);

  if (loading) return "Loading...";
  if (error) return "Some error";
  console.log({ data });
  return (
    <div className="body">
      {data?.map((e) => (
        <Gig key={e.id} gig={e} />
      ))}
    </div>
  );
}
