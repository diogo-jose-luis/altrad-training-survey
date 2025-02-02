import DepartmentTable from "@/app/components/DepartamentTable";
import Link from "next/link";
import React from "react";


interface Props {
  params: { slug: string[] };
  searchParams : { sortOrder : string }
}

const ProductPage = ({ params: { slug }, searchParams:{sortOrder} }: Props) => {

  return (
    <div>
      <h1>ProductPage slugs - {slug} - {sortOrder}</h1>
      <hr></hr>
      <Link href="/" className="mr-2">Main Page</Link>
      <Link href="/users/new" className="btn btn-primary">New Departament</Link>
      <hr></hr>
      <DepartmentTable sortOrder={sortOrder} />
      <hr></hr>
      <Link href="/users/new">New departamento</Link>
    </div>
  );
};

export default ProductPage;
