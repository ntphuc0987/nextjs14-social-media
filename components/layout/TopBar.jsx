"use client";

import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { Add, Logout, Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people,..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => {}} />
      </div>

      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>

      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex items-center md:hidden cursor-pointer">
              <Logout sx={{ fontSize: "32px" }} />
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/">
          <Image
            src="/assets/avatar.jpg"
            alt="Profile photo"
            width={50}
            height={50}
            className="rounded-full md:hidden w-[50px] h-[50px] object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
