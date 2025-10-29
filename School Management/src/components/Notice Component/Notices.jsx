import React from 'react'
import "./Notices.css"
import notificationIcon from "../../assets/DashBoard/notification.svg"

const Notices = ({background, notice_heading, notice_description}) => {
  return (
    <div className='notice-card'>
      <div className={`logo ${background}`}>
        <img src={notificationIcon} alt="" />
      </div>
      <div className="notice-description">
        <p className='notice-heading'>{notice_heading}</p>
        <span>{notice_description}</span>
      </div>
    </div>
  )
}

export default Notices
