import React, {useState, useEffect} from "react";
import "./Login.css";
import { Navbar } from "../Navbar/Navbar";
import wave from '../../wave.png'
import {domain} from '../../config'
import {useNavigate} from 'react-router-dom'
import bg from '../../bg.svg'
import avatar from '../../avatar.svg'
import axios from 'axios'
export function LoginPage(){
    let navigate = useNavigate()
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorText, setErrorText] = useState(null)
    
    async function postLogin(e){
        e.preventDefault()
        const postData = await axios.post(`${domain}/login/post`,{
            username: userName,
            password: password
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await postData.data
        console.log(data)
        if(data.user){
            setErrorText(null)
            localStorage.setItem('token', data.user)
            navigate('/dashboard')
        }else{
            setErrorText('error')
            
        }
    }
    const errorLoginactive = {
        display: "inherit",
        color: "rgb(248, 69, 69)"
    }
    const errorLogin = {
        display:"none"
    }
    useEffect(() => {
        if(localStorage.token) navigate('/')
    },[])
    // /errorText == "error" ? errorLoginactive : errorLogin
    return(
        <div>
            <Navbar/>
        {/*********/}
        <form onSubmit={postLogin}>
        <div className="login-content">
            <div className="login-page">
                <div className="login-name login-flex2">
                    <h1>Login Page</h1>
                </div>
                <h3 style={errorText == "error" ? errorLoginactive : errorLogin}>There is wrong in username or password</h3>
                <div className="username login-flex">
                    <span>Username</span>
                    <input required={true} className="input-username-password" type={'text'} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="password login-flex">
                    <span>Password</span>
                    <input required={true} className="input-username-password" type={'password'} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="btn-login login-flex2">
                    <button type="submit">Login</button>
                </div>
            </div>
        </div>
        </form>
    </div>
        
    )
}