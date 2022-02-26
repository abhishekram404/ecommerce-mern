import React from "react";

const AppContext = React.createContext({
  isUserLoggedIn: false,
  r: "C",
  categories: [],
});

export default AppContext;
