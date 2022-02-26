import React from "react";
import Cookies from "js-cookie";
export default function RoleRestrict({ children, onlyFor, ...rest }) {
  const r = Cookies.get("r") || "C";
  console.log(r);
  return (
    <>
      {onlyFor.includes(r) ? (
        children
      ) : (
        <h1>You don't have permission to view this page.</h1>
      )}
    </>
  );
}
