import React from "react";
import "./Landing.css";
import { Navbar } from "../index";
import teaching from "../../teaching.svg";
import { Link } from 'react-router-dom'
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
              <Link to="/login">
              <button>Log in</button>
              </Link>
            </div>
          </div>

          <div className="landing-second-section">
            <img src={teaching} />
          </div>
        </div>
      </div>
      <div className="fut-content">
        <div className="center-text-landing">
          <h1>
            Why <span>Mr.Tamer</span>
          </h1>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="shape">
              <i className="fa fa-briefcase bkg1">
                <img src="https://img.icons8.com/ios/50/ffffff/parse-from-clipboard.png" />
              </i>
              <div className="inner-shape bkg1">
                <div className="content">
                  <h2>
                    +10 years
                    <br />
                    Experience
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="shape">
              <i className="fa fa-user-o bkg2">
                <img src="https://img.icons8.com/ios/50/ffffff/training.png" />
              </i>
              <div className="inner-shape bkg2">
                <div className="content">
                  <h2>
                    Good
                    <br />
                    explanation
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="shape">
              <i className="fa fa-handshake-o bkg3">
                <img src="https://img.icons8.com/ios/50/ffffff/course-assign.png" />
              </i>
              <div className="inner-shape bkg3">
                <div className="content">
                  <h2>
                    High Quality
                    <br />
                    in Training
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="content-private-lesson">
      <div className="private-lesson-landing">
      <div className="private-lesson-bkg">
        <div>
          <h1>
            If you want to take private lesson with <span>Mr.Tamer</span>
          </h1>
          </div>
          <div>
          <button className="btn-private-lesson">Contact Mr.Tamer</button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
