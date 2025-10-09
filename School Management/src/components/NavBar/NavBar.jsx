import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/NavBar/logo.svg'
import home from '../../assets/NavBar/home-2.svg'
import teacher from '../../assets/NavBar/teacher.svg'
import student from '../../assets/NavBar/profile-2user.svg'
import finance from '../../assets/NavBar/dollar-square.svg'
import calender from '../../assets/NavBar/calendar.svg'
import timetable from '../../assets/NavBar/calendar_1.svg'
import message from '../../assets/NavBar/message.svg'
import setting from '../../assets/NavBar/setting-2.svg'
import rightArrow from '../../assets/NavBar/chevron-right.svg'
import rightCircleArrow from '../../assets/NavBar/arrow-right-circle.svg'

const NavBar = () => {
    return (
        <aside className='navbar'>

            <div className="navbar-top">
                <div className="navbar-header">
                    <img src={logo} alt="" />
                    <span>DPS</span>
                </div>
                <div className="navbar-items">
                    <NavLink to='/' className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}>
                        <img src={home} alt="" />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to='/teacher' className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}>
                        <img src={teacher} alt="" />
                        <span>Teachers</span>
                    </NavLink>
                    <NavLink to='/student' className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}>
                        <img src={student} alt="" />
                        <span>Students</span>
                    </NavLink>
                    <NavLink to='/finance' className={({ isActive }) => isActive ? "nav-item active-item finance" : "nav-item finance"}>
                        <img src={finance} alt="" />
                        <span>Finance</span>
                        <img src={rightArrow} alt="" className='right-arrow' />
                    </NavLink>
                    <NavLink to='/calender' className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}>
                        <img src={calender} alt="" />
                        <span>Calender</span>
                    </NavLink>
                    <NavLink to='/timetable' className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}>
                        <img src={timetable} alt="" />
                        <span>Time Table</span>
                    </NavLink>
                    <NavLink to='/message' className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}>
                        <img src={message} alt="" />
                        <span>Message</span>
                    </NavLink>
                    <NavLink to='/setting' className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}>
                        <img src={setting} alt="" />
                        <span>Settings</span>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-bottom">
                <button className='log-out-button'>
                    <span>Log Out</span>
                    <img src={rightCircleArrow} alt="" />
                </button>
            </div>


        </aside>
    )
}

export default NavBar
