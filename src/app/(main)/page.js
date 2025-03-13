"use client";

import Gig from "@/components/Gigs/Gig";
import useApiState from "@/hooks/useApiState";
import { getGigs } from "@/thunks/apiThunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
    <div className="body grid gap-4">
      {data?.map((e) => (
        <Gig key={e.id} gig={e} />
      ))}
    </div>
  );
}
