import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import AppContext from "utils/AppContext";
export default function ProtectedRoute({ component: Component, ...rest }) {
  const { isUserLoggedIn } = useContext(AppContext);
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
