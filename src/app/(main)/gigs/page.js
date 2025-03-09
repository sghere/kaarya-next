"use client";
import useApiState from "@/hooks/useApiState";
import { getGigs } from "@/thunks/apiThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Gigs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log({ user });
  useEffect(() => {
    if (!user.id) return;
    dispatch(
      getGigs({
        user: {
          id: user.id,
        },
      })
    );
  }, [user]);
  const { data, loading, error } = useApiState("getGigs");

  if (loading) return "loading...";
  if (error) return "Some error";

  return (
    <div className="grid gap-4 p-4">
      {data?.map((gig) => (
        <Gig gig={gig} />
      ))}
    </div>
  );
};

const Gig = ({ gig }) => {
  console.log({ gig });
  return (
    <div className="GigCard  p-3 border border-gray-200 rounded-lg">
      <h2>{gig.title}</h2>
      <p>{gig.description}</p>
    </div>
  );
};

export default Gigs;
