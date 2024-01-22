import Image from "next/image";
import Link from "next/link";

import Menu from "./Menu";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";

const LeftSidebar = () => {

  const isLoggedIn = true;

  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <Link href="/">
        <Image src="/assets/logo.gif" alt="logo" width={200} height={200} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-gray-1">
          <Link href="/">
            <Image
              src="/assets/avatar.jpg"
              width={50}
              height={50}
              alt="profile photo"
              className="rounded-full"
              objectFit="cover"
            />
          </Link>
          <p className="text-small-bold text-black">Phuc Nguyen</p>
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold text-black">50</p>
            <p className="text-tiny-medium text-black">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold text-black">150-</p>
            <p className="text-tiny-medium text-black">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold text-black">50</p>
            <p className="text-tiny-medium text-black">Following</p>
          </div>
        </div>

        <hr />

        <Menu />

        <hr />

        <div className="flex gap-4 items-center">
          <UserButton />
          <p className="text-black text-body-bold">Manage Account</p>
        </div>

        <SignedIn>
          <SignOutButton>
            <div className="flex items-center gap-2 cursor-pointer py-4">
              <Logout sx={{ color: "white", fontSize: "28px", backgroundColor: "#9ca3af", borderRadius: "50%", padding: "5px" }} />
              <p className="text-small-bold">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default LeftSidebar;
