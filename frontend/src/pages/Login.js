import React from "react";
import { Link } from "react-router-dom";
import FormTemplate from "../components/FormTemplate";
import { Input } from "../components/FormTemplate";
export default function Login() {
  return (
    <FormTemplate>
      <form>
        <h2 className="text-center">Login</h2>
        <br />
        <div className="mb-3">
          <Input
            htmlFor="email"
            label="Email"
            type="email"
            placeholder="someone@example.com"
          />
        </div>
        <div className="mb-3">
          <Input
            htmlFor="password"
            label="Password"
            type="password"
            placeholder="rhin0runsf@st"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="remember-me"
            id="remember-me"
            className="form-check-input"
          />
          <label htmlFor="remember-me" className="form-check-label">
            Remember me{" "}
          </label>
        </div>
        <div className="mb-3">
          <input type="submit" className="btn submit-btn" value="Login" />
        </div>
      </form>
      <hr className="mx-auto" />
      <p className="text-center">
        Don't have an account ? <Link to="/register">Register here </Link>
      </p>
    </FormTemplate>
  );
}
