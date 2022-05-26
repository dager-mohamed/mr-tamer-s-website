import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
import { useLocation, useParams, Link, Redirect } from 'react-router-dom';
export function Navbar() {
  const location = useLocation();
  function redirectLogin(){
    window.location.href = '/login'
  }
  return (
    <div>
      <nav>
        <div>
          <div className="nav-content">
            <Link to='/'>
            <div className="nav-content-logo">
              <img src={logo} />
            </div>
            </Link>
            <div className="nav-content-ul">
              <ul className="nav-ul">
                <Link to='/'>
                <li className={ location.pathname == '/' ? "nav-li nav-li-active" : "nav-li"}>Home</li>
                </Link>
                <li className="nav-li">Dashboard</li>
                <li className="nav-li">Contact</li>
              </ul>
            </div>

            <div className="button-nav">
              <Link to={'/login'} href="/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
