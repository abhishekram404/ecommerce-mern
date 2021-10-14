import React from "react";
import loginSvg from "assets/login-svg.svg";
import "styles/Register.scss";

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
