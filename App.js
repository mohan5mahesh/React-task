// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";

// import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="price_tag">
        <h4 className="price">FREE</h4>
        <p className="plan-amount">
          $0<span className="plan-duration">/month</span>
        </p>
        <hr></hr>
        <ul className="plan-list">
          <li>Single User</li>
          <li>5GB Storage</li>
          <li>Unlimited public projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
      <div className="price_tag">
        <h4 className="price">PLUS</h4>
        <p className="plan-amount">
          $9<span className="plan-duration">/month</span>
        </p>
        <hr></hr>
        <ul className="plan-list">
          <li>5 Users</li>
          <li>5GB Storage</li>
          <li>Unlimited public projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
      <div className="price_tag">
        <h4 className="price">PRO</h4>
        <p className="plan-amount">
          $49<span className="plan-duration">/month</span>
        </p>
        <hr></hr>
        <ul className="plan-list">
          <li>Unlimited Users</li>
          <li>150GB Storage</li>
          <li>Unlimited public projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Unlimited Free Subdomain</li>
          <li>Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
    </div>
  );
}

export default App;
