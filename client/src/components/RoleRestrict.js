import React from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
export default function RoleRestrict({ children, onlyFor, ...rest }) {
  const r = useSelector((state) => state.user.r) || Cookies.get("r");
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
