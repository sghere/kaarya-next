"use client";
import Button from "@/components/Button";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

const Profile = () => {
  return (
    <div>
      Profile
      <div className="grid">
        <Link href="profile/settings">Settings</Link>
        <Link href="profile/account">Account</Link>
        <Link href="profile/notification">Notification</Link>
        <Link href="profile/help">Help</Link>
        <Link href="profile/credits">Credits</Link>
        <Button
          variant="primary"
          onClick={() => {
            supabase.auth.signOut();
          }}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
