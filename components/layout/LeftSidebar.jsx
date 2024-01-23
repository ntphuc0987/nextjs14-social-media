"use client";

import { SignedIn, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Logout } from "@mui/icons-material";

import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const LeftSidebar = () => {
  const { user, isLoaded } = useUser();
  console.log(user);

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${user?.id}`);

    const data = await response.json();
    //console.log(data);
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <Link href="/">
        <Image src="/assets/logo.gif" alt="logo" width={200} height={200} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-gray-1">
          <Link href="/">
            <Image
              src={userData?.profilePhoto}
              width={50}
              height={50}
              alt="Profile Photo"
              className="rounded-full"
              objectFit="cover"
            />
          </Link>
          <p className="text-small-bold text-black">
            {userData?.firstName} {userData?.lastName}
          </p>
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold text-black">
              {userData?.posts?.length}
            </p>
            <p className="text-tiny-medium text-black">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold text-black">
              {userData?.followers?.length}
            </p>
            <p className="text-tiny-medium text-black">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold text-black">
              {userData?.following?.length}
            </p>
            <p className="text-tiny-medium text-black">Following</p>
          </div>
        </div>

        <hr />

        <Menu />

        <hr />

        <div className="flex gap-4 items-center">
          <UserButton appearance={{ baseTheme: neobrutalism }} />
          <p className="text-black text-body-bold">Manage Account</p>
        </div>

        <SignedIn>
          <SignOutButton>
            <div className="flex items-center gap-2 cursor-pointer py-4">
              <Logout
                sx={{
                  color: "white",
                  fontSize: "28px",
                  backgroundColor: "#9ca3af",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
              <p className="text-small-bold">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default LeftSidebar;
