"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const UserError = ({ error, reset }: Props) => {
  console.log("Error : ", error);

  return (
    <>
      <div>An error ocurred with the user fetch ( just need to remove the x character I put before the request endpoint )</div>
      <div>This an example of how to catch error</div>
      <button className="btn btn-primary text-blue-50" onClick={()=>reset()}>Tentar outra vez</button>
    </>
  );
};

export default UserError;
