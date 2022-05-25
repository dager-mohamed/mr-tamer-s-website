import React from "react";
import "./Landing.css";
import { Navbar } from "../index";
import teaching from "../../teaching.svg";
export function Landing() {
  return (
    <div>
      <Navbar />
      {/*********/}
      <div className="content-landing">
        <div className="landing-content">
          <div className="landing-first-section">
            <h1>
              Be master in <span className="span-landing">English</span>
            </h1>
            <div className="btn-landing">
                <button>Log in</button>
            </div>
          </div>

          <div className="landing-second-section">
            <img src={teaching} />
          </div>
        </div>
      </div>
    </div>
  );
}
