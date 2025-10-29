import React from 'react'
import "./Notice_Board.css"
import { Link, NavLink } from 'react-router-dom'
import editButton from "../../assets/DashBoard/edit.svg"
import deleteButton from "../../assets/DashBoard/deleteIcon.svg"
import Notices from '../Notice Component/Notices'

const Notice_Board = () => {
  return (
    <div className='notice-board'>
      <div className="notice-board-header">
        <span>Notice Board</span>
        <Link className='view-all-button'>view all</Link>
      </div>
      <div className="notice-board-notices">
        <div className="notice">
          <Notices background="yellow" notice_heading="Sports Day Announcement" notice_description="The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!" />
        </div>
        <div className="notice" >
          <Notices background="purple" notice_heading="Summer Break Start Date" notice_description="Summer break begins on May 25, 2024. Have a wonderful holiday!"/>
        </div>
        {/* <div className="notice">
          <Notices background="yellow" />
        </div>
        <div className="notice" >
          <Notices background="purple" />
        </div>
        <div className="notice">
          <Notices background="yellow" />
        </div>
        <div className="notice" >
          <Notices background="purple" />
        </div> */}
      </div>
      <div className="notice-board-footer">
        <button>Add New</button>
        <button><img src={editButton} alt="" /></button>
        <button><img src={deleteButton} alt="" /></button>
      </div>
    </div>
  )
}

export default Notice_Board
