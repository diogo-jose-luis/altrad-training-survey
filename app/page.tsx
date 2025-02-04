"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import gloves from "@/public/images/image1.png";
import { Metadata } from "next";
import { useState } from "react";

import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"));

export default function Home() {
  const session = null;
  //const session = await getServerSession(authOptions);

  const [isVisible, setVisible] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative h-screen">
      {/* <h1>{session && <span>{session.user!.name}</span>}</h1> */}

      <h1>Removed session user</h1>
      <hr></hr>

      <Link href="/users" className="font-poppins">
        departamentos
      </Link>
      <Link href="/products?sortOrder=designacao">Produtos ( sortOrder )</Link>
      <Link href="/admin">Admin Page</Link>
      <Link href="/upload">Upload Files Page</Link>
      <Link href="/api/users">API users</Link>

      <hr></hr>

      <h1>Heavy component for lazyload</h1>
      <button className="btn btn-secondary" onClick={() => setVisible(true)}>
        Click to show
      </button>
      {isVisible && <HeavyComponent />}
      <hr></hr>
      <hr></hr>

      <h1>Lodash heavy and nice librarie</h1>
      <button
        className="btn btn-secondary"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sortedArray = _.orderBy(users, ['name']);
          console.log(sortedArray);
        }}
      >
        Use Lodash see in console log
      </button>
      <hr></hr>
      <h1>Images</h1>
      {/* <Image src={gloves} alt="luvas" /> */}
      {/* <div className="h-8">
        <Image
          src="https://bit.ly/react-cover"
          alt="luvas"
          fill
          className="object-cover"
          sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw"
          quality={100}
          priority
        />
      </div> */}
      <hr></hr>
      <ProductCard />
    </main>
  );
}
