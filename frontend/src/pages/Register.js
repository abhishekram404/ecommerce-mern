import React from "react";
import { Link } from "react-router-dom";
import FormTemplate from "../components/FormTemplate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    repassword: "",
    agreed: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be 3 characters or more!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters or more!")
      .required("Required"),
    repassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    ),
    agreed: Yup.boolean()
      .oneOf([true], "You must agree to the terms & conditions.")
      .required("You must agree to the terms & conditions."),
  });

  const onSubmit = (values) => {
    console.log(values);
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
            <h2 className="text-center">Register your account</h2>
            <br />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="John Doe"
                id="name"
                name="name"
              />
              <div className="error-message text-danger">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                className="form-control"
                placeholder="someone@example.com"
                id="email"
                name="email"
              />
              <div className="error-message text-danger">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                className="form-control"
                placeholder="rhin0runsf@st"
                id="password"
                name="password"
              />
              <div className="error-message text-danger">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="repassword" className="form-label">
                Confirm Password
              </label>
              <Field
                type="password"
                className="form-control"
                placeholder="rhin0runsf@st"
                id="repassword"
                name="repassword"
              />
              <div className="error-message text-danger">
                <ErrorMessage name="repassword" />
              </div>
            </div>
            <div className="mb-3 form-check">
              <Field
                type="checkbox"
                id="agreed"
                className="form-check-input"
                name="agreed"
              />
              <label htmlFor="agreed" className="form-check-label">
                I hereby agree to all <span>terms and conditions</span> of
                Shopify.
              </label>
              <div className="error-message text-danger">
                <ErrorMessage name="agreed" />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className={clsx(
                  "btn submit-btn",
                  Object.keys(props.errors).length >= 1 &&
                    !props.values.agreed &&
                    "disabled"
                )}
                value="Register my account"
                disabled={
                  Object.keys(props.errors).length >= 1 &&
                  !props.values.agreed &&
                  true
                }
              />
            </div>
          </Form>
        )}
      </Formik>
      <hr className="mx-auto" />
      <p className="text-center">
        Already have an account ? <Link to="/login">Login</Link>
      </p>
    </FormTemplate>
  );
}
