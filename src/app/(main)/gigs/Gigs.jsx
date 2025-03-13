"use client";
import Gig from "@/components/Gigs/Gig";
import useApiState from "@/hooks/useApiState";
import { getGigs } from "@/thunks/apiThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Gigs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(
      getGigs({
        type: "GET",
      })
    );
  }, [dispatch]);
  const { data, loading, error } = useApiState("getGigs");

  if (loading) return "loading...";
  if (error) return "Some error";

  return (
    <div className="grid gap-4 p-4">
      {data?.map((gig) => (
        <Gig key={gig.id} gig={gig} />
      ))}
    </div>
  );
};

export default Gigs;
