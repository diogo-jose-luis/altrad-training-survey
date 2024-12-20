import Link from "next/link";
import React from "react";

const UsersPage = () => {
  return (
    <div>
      UsersPage
      <hr></hr>
      <Link href="/">Main Page</Link>
      <hr></hr>
      <Link href="/users/new">New user</Link>
    </div>
  );
};

export default UsersPage;
