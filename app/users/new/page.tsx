'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


const DepartamentNew = () => {

  const router = useRouter();

  return (
    <div>
      DepartamentoNew
      <hr></hr>
      <Link href="/">Main Page</Link>
      <hr></hr>
      <Link href="/users">Departamentos</Link>

      <hr className="mb-5"></hr>
      <button 
      className="btn btn-primary"
      onClick={()=>router.push('/products')}
      >Create</button>
    </div>
  );
};

export default DepartamentNew;
