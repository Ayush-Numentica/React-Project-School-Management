import React from 'react'
import "./Header.css"
import backButton from "../../assets/Header/arrow-right.svg"
import searchIcon from "../../assets/Header/search-icon.svg"
import notificationIcon from "../../assets/Header/notification.svg"
import messageIcon from "../../assets/Header/message.svg"
import settingIcon from "../../assets/Header/setting-22.svg"
import profile from "../../assets/Header/profile.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='page-header'>
        <div className="page-header-left">
            <button className='back-button'>
                <img src={backButton} alt="" />
            </button>
            <div className="search-bar">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className="page-header-right">
            <Link className="header-right-button">
                <img src={notificationIcon} alt="" />
            </Link>
            <Link className="header-right-button">
                <img src={messageIcon} alt="" />
            </Link>
            <Link className="header-right-button">
                <img src={settingIcon} alt="" />
            </Link>
            <Link>
                <img src={profile} alt="" />
            </Link>
        </div>
      
    </header>
  )
}

export default Header
