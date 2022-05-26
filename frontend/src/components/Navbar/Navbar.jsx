import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
import { useHistory, useParams } from 'react-router-dom';
export function Navbar() {
  const history = useHistory();
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
                <li className={ history.location.pathname == '/' ? "nav-li nav-li-active" : "nav-li"}>Home</li>
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
