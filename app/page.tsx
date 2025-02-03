import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{session && <span>{session.user!.name}</span>}</h1>
      <hr></hr>
      <Link href="/users">departamentos</Link>
      <Link href="/products?sortOrder=designacao">Produtos ( sortOrder )</Link>
      <Link href="/admin">Admin Page</Link>
      <Link href="/upload">Upload Files Page</Link>
      <Link href="/api/users">API users</Link>
      <hr></hr>
      <ProductCard />
    </main>
  );
}
