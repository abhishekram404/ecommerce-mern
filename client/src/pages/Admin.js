import Customers from "pages/Customers";
import Dashboard from "pages/Dashboard";
import Employees from "pages/Employees";
import Orders from "pages/Orders";
import Products from "pages/Products";
import Sidebar from "components/Sidebar";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import "styles/Admin.scss";
import RoleRestrict from "components/RoleRestrict";
export default function Admin() {
  const { url } = useRouteMatch();
  return (
    <RoleRestrict onlyFor={["A", "E"]}>
      <div className="admin">
        <Sidebar />
        <div className="display-area card">
          <Switch>
            <Route path={`${url}/`} exact component={Dashboard} />
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
    </RoleRestrict>
  );
}
