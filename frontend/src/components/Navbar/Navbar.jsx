import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
import { useLocation, useParams, Link, Redirect } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
export function Navbar({ user }) {
  let navigate = useNavigate()
  const location = useLocation();
  function redirectLogin() {
    window.location.href = "/login";
  }
  function Logout(){
    localStorage.removeItem('token')
    window.location.href = "/";
  }
  return (
    <div>
      <nav>
        <div>
          <div className="nav-content">
            <Link to="/">
              <div className="nav-content-logo">
                <img src={logo} />
              </div>
            </Link>
            <div className="nav-content-ul">
              <ul className="nav-ul">
                <Link to="/">
                  <li
                    className={
                      location.pathname == "/"
                        ? "nav-li nav-li-active"
                        : "nav-li"
                    }
                  >
                    Home
                  </li>
                </Link>
                <Link to="/dashboard">
                <li className={
                      location.pathname.includes('/dashboard')
                        ? "nav-li nav-li-active"
                        : "nav-li"
                    }>Dashboard</li>
                </Link>
                <li className="nav-li">Contact</li>
              </ul>
            </div>

            <div className="button-nav">
              {user ? (
                <button onClick={Logout}>Logout</button>
              ) : (
                <Link to={"/login"} href="/login">
                  <button>Login</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
