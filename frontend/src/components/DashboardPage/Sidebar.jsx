import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
export function Sidebar(){
    
    return(
        <div>
            <div className="sidebar">
                <ul className="navlist">
                    <li>
                        <NavLink className={window.location.pathname == '/dashboard' ? 'sidebar-active' : ''}  to={'/dashboard'}>
                        <i class='bx bxs-dashboard' ></i>
                        <span className="links-name">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? 'sidebar-active' : '')} to={'/dashboard/homework'}>
                        <i class='bx bxs-book' ></i>
                        <span className="links-name">Homework</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? 'sidebar-active' : '')} to={'/dashboard/Exercise'}>
                        <i class='bx bxs-graduation' ></i>
                        <span className="links-name">Exercises</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}