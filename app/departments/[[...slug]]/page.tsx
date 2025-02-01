import DepartmentTable from "@/app/components/DepartamentTable";
import Link from "next/link";
import React from "react";

interface Props {
  params: { slug: string[] };
}

const DepartmentsPage = ({ params: { slug } }: Props) => {
  return (
    <div>
      <h1>DepartmentsPage slugs - {slug}</h1>
      <hr></hr>
      <Link href="/">Main Page</Link>
      <hr></hr>
      <DepartmentTable />
      <hr></hr>
      <Link href="/users/new">New departamento</Link>
    </div>
  );
};

export default DepartmentsPage;
