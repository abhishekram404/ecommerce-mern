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
function App() {
  const dispatch = useDispatch();
  const { cartExpanded } = useSelector((state) => state.common);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div
          className="body"
          onScroll={() => {
            dispatch(collapse_cart());
            console.log("Scrolling");
          }}
        >
          <Cart />
          {cartExpanded && <div className="backdrop"></div>}

          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
