import React from "react";
import "./Login.css";
import { Navbar } from "../Navbar/Navbar";
import wave from '../../wave.png'
import bg from '../../bg.svg'
import avatar from '../../avatar.svg'
export function LoginPage(){
    return(
        <div>
            <Navbar/>
        {/*********/}
        <div className="login-content">
            <div className="login-page">
                <div className="login-name login-flex2">
                    <h1>Login Page</h1>
                </div>
                <div className="username login-flex">
                    <span>Username</span>
                    <input className="input-username-password" type={'text'} />
                </div>
                <div className="password login-flex">
                    <span>Password</span>
                    <input className="input-username-password" type={'password'} />
                </div>
                <div className="btn-login login-flex2">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
        
    )
}