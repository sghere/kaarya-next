"use client";
import Button from "@/components/common/Button";
import { supabase } from "@/lib/utils/supabase";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 pt-8">
      <Link href="profile/settings" className="hover:text-primary-700">
        Settings
      </Link>
      <Link href="profile/account" className="hover:text-primary-700">
        Account
      </Link>
      <Link href="profile/notification" className="hover:text-primary-700">
        Notification
      </Link>
      <Link href="profile/help" className="hover:text-primary-700">
        Help
      </Link>
      <Link href="profile/credits" className="hover:text-primary-700">
        Credits
      </Link>
      <Button
        variant="failed"
        className="disabled "
        // disabled={true}
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default Profile;
