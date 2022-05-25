import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
export function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <div className="nav-content">
            <div className="nav-content-logo">
              <img src={logo} />
            </div>

            <div className="nav-content-ul">
              <ul className="nav-ul">
                <li className="nav-li">Home</li>
                <li className="nav-li">Dashboard</li>
                <li className="nav-li">Contact</li>
              </ul>
            </div>

            <div className="button-nav">
              <button>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
