import React from "react";
import { Link } from "react-router-dom";
import FormTemplate from "../components/FormTemplate";
import { Input } from "../components/FormTemplate";
export default function Register() {
  return (
    <FormTemplate>
      <form>
        <h2 className="text-center">Register your account</h2>
        <br />
        <div className="mb-3">
          <Input
            htmlFor="name"
            label="Name"
            type="text"
            placeholder="John Doe"
          />
        </div>
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
        <div className="mb-3">
          <Input
            htmlFor="confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="rhin0runsf@st"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="tnc"
            id="tnc"
            className="form-check-input"
          />
          <label htmlFor="tnc" className="form-check-label">
            I hereby agree to all <span>terms and conditions</span> of Shopify.
          </label>
        </div>
        <div className="mb-3">
          <input
            type="submit"
            className="btn submit-btn"
            value="Register my account"
          />
        </div>
      </form>
      <hr className="mx-auto" />
      <p className="text-center">
        Already have an account ? <Link to="/login">Login</Link>
      </p>
    </FormTemplate>
  );
}