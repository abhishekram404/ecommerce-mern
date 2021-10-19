import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
export default function ProtectedRoute({ component: Component, ...rest }) {
  const isUserLoggedIn =
    useSelector((state) => state.user.isUserLoggedIn) ||
    Cookies.get("isUserLoggedIn");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isUserLoggedIn) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  prevLocation: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
