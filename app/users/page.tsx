import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";


const DepartamentosPage = async () => {

  return (
    <div>
      <h1>Departamentos</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <hr></hr>
      <Link href="/">Main Page</Link>
      <hr></hr>
      <UserTable />
      <hr></hr>
      <Link href="/users/new">New departamento</Link>

      <hr className="mb-5"></hr>

      <button className="btn btn-primary">Create</button>

    </div>
  );
};

export default DepartamentosPage;
