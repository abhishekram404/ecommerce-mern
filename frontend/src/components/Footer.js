import React from "react";
import "styles/Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <section>
        <h2>Shopy</h2>
        <h6> Copyright &copy; {new Date().getFullYear()}</h6>
      </section>
      <section>
        <div className="title">Categories</div>
        <ul>
          <li> Food & drinks</li>
          <li>Food & drinks</li>
          <li>Food & drinks</li>
          <li>Food & drinks</li>
          <li>Food & drinks</li>
          <li>Food & drinks</li>
        </ul>
      </section>
      <section>
        <div className="title">Social links</div>
        <ul>
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
        </ul>
      </section>
    </div>
  );
}
