"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 text-dark">
      <Link href="/" className="mr-5 text-black">
        NextJs
      </Link>

      <Link href="/users" className="mr-1 text-black">
        Users
      </Link>
      <Link href="/products" className="mr-1 text-black">
        | Products
      </Link>

      <Link href="/api/auth/token" className="mr-1 text-black">
        | Api-User(Token)
      </Link>

      | 

      {status === "loading" && <div className="text-black">Loading...</div>}

      {/* {status === "authenticated" && (
        <Image
          src={session.user?.picture}
          alt="Picture of the author"
          width={70}
          height={70}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      )} */}
      {status === "authenticated" && (
        <div className="text-black">
          | {session.user!.name}
          | <Link href="/api/auth/signout">Sign Out</Link>
          </div>
      )}

      {status === "unauthenticated" && (
        <>
        <Link href="/api/auth/signin" className="text-black mr-1">
          | Login with Google Account
        </Link>

        <Link href="/register" className="text-black">
          | Register
        </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
