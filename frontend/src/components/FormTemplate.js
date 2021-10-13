import React from "react";
import loginSvg from "assets/login-svg.svg";
import "styles/Register.scss";
import { Link } from "react-router-dom";

export default function FormTemplate({ children }) {
  return (
    <div className="form-template">
      <div className="form-cont shadow">
        <div className="left">
          <div className="img-cont">
            <img src={loginSvg} alt="login-svg" />
          </div>
        </div>
        <div className="right">{children}</div>
      </div>
    </div>
  );
}

export const Input = ({ htmlFor, label, type, placeholder }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        id={htmlFor}
      />
    </>
  );
};
