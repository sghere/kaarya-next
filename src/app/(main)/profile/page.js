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
      </div>
    </div>
  );
};

export default Profile;
