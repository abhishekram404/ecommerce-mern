import Customers from "components/Customers";
import Dashboard from "components/Dashboard";
import Employees from "components/Employees";
import Orders from "components/Orders";
import Products from "components/Products";
import Sidebar from "components/Sidebar";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import "styles/Admin.scss";
export default function Admin() {
  const { url } = useRouteMatch();
  return (
    <div className="admin">
      <Sidebar />
      <div className="display-area card">
        <Switch>
          <Route path={`${url}/dashboard`} component={Dashboard} />
          <Route path={`${url}/products`} component={Products} />
          <Route path={`${url}/orders`} component={Orders} />
          <Route path={`${url}/customers`} component={Customers} />
          <Route path={`${url}/employees`} component={Employees} />
          <Route
            path={`${url}/*`}
            render={() => {
              <h1>404 Not found</h1>;
            }}
          />
        </Switch>
      </div>
    </div>
  );
}
