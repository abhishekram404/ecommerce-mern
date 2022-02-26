import { useRef, useState } from "react";
import Navbar from "components/Navbar";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "pages/Register";
import Login from "pages/Login";
import Cart from "components/Cart";
import Homepage from "pages/Homepage";
import { useDispatch } from "react-redux";
import { collapse_cart } from "redux/actions/commonActions";
import { useSelector } from "react-redux";
import Footer from "components/Footer";
import Admin from "pages/Admin";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { CLEAR } from "redux/constants";
import ProtectedRoute from "components/ProtectedRoute";
import AppContext from "utils/AppContext";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import axios from "axios";
function App() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { cartExpanded } = useSelector((state) => state.common);
  const { type, message } = useSelector((state) => state.alert);

  const isUserLoggedIn =
    sessionStorage.getItem("isUserLoggedIn") === "true" ||
    Cookies.get("isUserLoggedIn") === "true";

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (!type || !message) {
      return;
    }
    switch (type) {
      case "SUCCESS":
        return alert.success(message, {
          onClose: () => {
            dispatch({ type: CLEAR });
          },
        });
      case "ERROR":
        return alert.error(message, {
          onClose: () => {
            dispatch({ type: CLEAR });
          },
        });
      default:
        return alert.info(message, {
          onClose: () => {
            dispatch({ type: CLEAR });
          },
        });
    }
  }, [type, message]);

  let { isSuccess: categoriesSuccess, data: categories } = useQuery(
    "categories",
    () => axios.get("/product/categories")
  );

  if (categoriesSuccess) {
    categories = categories.data.details;
  }

  return (
    <AppContext.Provider value={{ isUserLoggedIn, categories }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div
            className="body"
            onScroll={() => {
              dispatch(collapse_cart());
            }}
          >
            <Cart />
            {cartExpanded && <div className="backdrop"></div>}

            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/admin" component={Admin} />
              <Route path="*">
                <h1>Error 404! Page Not found </h1>;
              </Route>
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
