"use client";

import Button from "@/components/Button";
import useApiState from "@/hooks/useApiState";
import { getBalance } from "@/thunks/apiThunks";
import Link from "next/link";
import { useEffect } from "react";
import { GoPerson, GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileLayout({ children }) {
  const user = useSelector((state) => state.user);
  if (!user) window.location.href = "/login";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBalance({}));
  }, [dispatch]);

  const { data, loading } = useApiState("getBalance");
  return (
    <div className="grid gap-6">
      <div className="grid place-items-center gap-3">
        <GoPerson className="size-10" />
        <div className="grid text-center">
          <h2 className="text-xs">Hello,</h2>
          <h2 className="text-lg font-medium">Shubham Gaikwad</h2>
          <h2 className="text-xs">{user.email}</h2>
        </div>
      </div>
      <div className="ProfileCard bg-primary-950 grid gap-5 text-primary-50  p-4 rounded-3xl">
        <div className="flex justify-between">
          <div className="WalletDetails grid">
            <label className="text-primary-300"> Wallet</label>
            <h2 className="text-3xl">{(loading && "Loading...") || data}</h2>
          </div>
          <div className="grid place-items-center">
            <Link href="/profile/wallet/addcredits">
              <Button
                variant="outline"
                className="text-white border-white"
                size="box"
              >
                <GoPlus className="size-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
