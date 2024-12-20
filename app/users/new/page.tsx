import Link from "next/link";
import React from "react";

const UserNew = () => {
  return (
    <div>
      UserNew
      <hr></hr>
      <Link href="/">Main Page</Link>
      <hr></hr>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default UserNew;
