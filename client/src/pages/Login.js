import React, { useContext, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import FormTemplate from "../components/FormTemplate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import axios from "axios";
import { ERROR, SUCCESS } from "redux/constants";
import AppContext from "utils/AppContext";
function Login() {
  const history = useHistory();
  const { isUserLoggedIn } = useContext(AppContext);
  useEffect(() => {
    if (isUserLoggedIn) {
      history.push("/");
    }
  });

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(6, "Password  must be at least 6 characters long.")
      .required("Required"),
    remember: Yup.boolean().oneOf([true, false], null),
  });

  const { mutate, isLoading } = useMutation(
    (data) => axios.post("/user/login", data),
    {
      onSuccess: ({ data }) => {
        console.log(data);
        sessionStorage.setItem("isUserLoggedIn", true);
        dispatch({ type: SUCCESS, payload: data.message });
      },
      onError: (error) => {
        console.log(error?.response?.data?.message);
        sessionStorage.removeItem("isUserLoggedIn");
        dispatch({ type: ERROR, payload: error?.response?.data?.message });
      },
    }
  );

  const onSubmit = (values) => {
    mutate(values);
  };

  return (
    <FormTemplate>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <h2 className="text-center">Login</h2>
            <br />
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email{" "}
              </label>

              <Field
                name="email"
                type="email"
                id="email"
                className="form-control"
                placeholder="someone@example.com"
              />
              <div className="error-message text-danger">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password{" "}
              </label>

              <Field
                name="password"
                type="password"
                id="password"
                className="form-control"
                placeholder="rhin0runsf@st"
              />

              <div className="error-message text-danger">
                <ErrorMessage name="password" />
              </div>
            </div>

            <div className="mb-3 form-check">
              <Field
                name="remember"
                type="checkbox"
                id="remember"
                className="form-check-input"
              />
              <label htmlFor="remember" className="form-check-label">
                Remember me{" "}
              </label>
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className={clsx(
                  "btn submit-btn",
                  Object.keys(props.errors).length >= 1 && "disabled"
                )}
                value={isLoading ? "Logging in" : "Login"}
                disabled={
                  isLoading || (Object.keys(props.errors).length >= 1 && true)
                }
              />
            </div>
          </Form>
        )}
      </Formik>
      <hr className="mx-auto" />
      <p className="text-center">
        Don't have an account ? <Link to="/register">Register here </Link>
      </p>
    </FormTemplate>
  );
}
export default withRouter(Login);
