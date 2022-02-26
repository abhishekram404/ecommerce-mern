import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import LoginContext from "utils/LoginContext";
export default function ProtectedRoute({ component: Component, ...rest }) {
  const { isUserLoggedIn } = useContext(LoginContext);
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
