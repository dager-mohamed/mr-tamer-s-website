import React, {useState, useEffect} from "react";

import { Navbar } from "../Navbar/Navbar";
import wave from '../../wave.png'
import {domain} from '../../config'
import {useNavigate} from 'react-router-dom'
import bg from '../../bg.svg'
import avatar from '../../avatar.svg'
import axios from 'axios'
import jwt from 'jwt-decode'
export function Dashboard(){
    let navigate = useNavigate()
    const [user, setUser] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
         try{
          const user = jwt(token)
          if(user){
            setUser(user.username)

          }
          console.log(user)
          if(!user){
            localStorage.removeItem('token')
            navigate('/')
          }
         }catch(err){
          localStorage.removeItem('token')
          navigate('/')
         }
    
        }else{
            navigate('/')
        }
      },[])
    // /errorText == "error" ? errorLoginactive : errorLogin
    return(
        <div>
            <Navbar user={user}/>
        {/*********/}
        <h1>Dashboard page</h1>
    </div>
        
    )
}