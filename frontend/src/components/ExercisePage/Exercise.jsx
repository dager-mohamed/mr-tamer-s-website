import React, { useState, useEffect } from "react";
import "./Exercise.css";
import { Navbar } from "../Navbar/Navbar";
import wave from "../../wave.png";
import { domain } from "../../config";
import { Link, useNavigate } from "react-router-dom";
import loginGIF from "../../login.gif";
import { Sidebar } from "../DashboardPage/Sidebar";
import bg from "../../bg.svg";
import { Oval } from "react-loader-spinner";
import avatar from "../../avatar.svg";
import axios from "axios";
import jwt from "jwt-decode";
export function Exercise() {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const user = jwt(token);
        if (user) {
          setUser(user.username);
        }
        console.log(user);
        if (!user) {
          localStorage.removeItem("token");
        }
      } catch (err) {
        localStorage.removeItem("token");
      }
    } else {
    }
    setLoading(false)
  }, []);
  // /errorText == "error" ? errorLoginactive : errorLogin
  return (
    <div>
      <Navbar user={user} />
      {!user ? (
          loading ? (
            <div className="spinner">
              <Oval color="#00BFFF" height={30} width={30} />{" "}
            </div>
          ) : (
            <div className="login-dashboard-div">
              <img src={loginGIF} />
              <h1>Please Login to get access to the dashboard</h1>
              <Link to="/login">
                <button className="login-dashboard-btn">Login</button>
              </Link>
            </div>
          )
        ) : loading ? (
<div className="spinner">
              <Oval color="#00BFFF" height={30} width={30} />{" "}
            </div>
        ) : (
          <div>
            <Sidebar />
            <div className="content-dashboard">
              <h1>Content</h1>
            </div>
          </div>
        )}
      {/*********/}
      <div></div>
    </div>
  );
}
