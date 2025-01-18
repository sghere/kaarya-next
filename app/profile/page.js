import Link from "next/link";
import {
  CiMedicalClipboard,
  CiWallet,
  CiStar,
  CiLocationOn,
  CiCircleInfo,
  CiLogout,
  CiSettings,
} from "react-icons/ci";

const Account = () => {
  const CardLinks = [
    { name: "My Posts", icon: <CiMedicalClipboard /> },
    { name: "Help & support", icon: <CiCircleInfo /> },
  ];

  const Options = [
    { name: "Preferences", icon: CiSettings },
    { name: "My Plans", icon: CiMedicalClipboard },
    { name: "Wallet", icon: CiWallet },
    { name: "My Ratings", icon: CiStar },
    { name: "Manage addresses", icon: CiLocationOn },
    { name: "About kaarya.pro", icon: CiCircleInfo },
    // { name: "logout", icon: CiLogout },
  ];
  return (
    <div className="size-full grid gap-2">
      <div className="UserInfo grid gap-4 p-4 pt-20">
        <div className="flex items-center justify-center text-center">
          <div className="grid">
            <h1 className="text-3xl font-semibold">Shubham Gaikwad</h1>
            <p className="text-xs text-primary-600">+91 8655301910</p>
          </div>
          {/* <FaRegEdit className="font-extrabold cursor-pointer" /> */}
        </div>
      </div>
      <ul className="Options w-full ">
        {Options.map(({ name, icon: Icon }) => {
          return (
            <Link
              key={"Link-" + name}
              href={"profile/" + name.replace(" ", "").toLowerCase()}
            >
              <li className="text-lg flex gap-3 items-center transition-all dark:hover:text-primary-300 w-full font-thin px-8 py-2">
                <Icon className="size-8" />
                {name}
              </li>
            </Link>
          );
        })}
        <li className="cursor-pointer text-lg flex gap-3 items-center transition-all dark:hover:text-primary-300 w-full font-thin px-8 py-2" onClick={}>
          <CiLogout className="size-8" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Account;
