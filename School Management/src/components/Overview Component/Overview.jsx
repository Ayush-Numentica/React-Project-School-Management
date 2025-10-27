import React from 'react'
import "./Overview.css"
import graphImg from "../../assets/DashBoard/image 2.svg"
import upArrow from "../../assets/DashBoard/arrow-up.svg"

const Overview = ({ total_amount, amount_description, status_description }) => {
  return (
    <div className='overview-container'>
      <div className="overview-card-header">
        <img src={graphImg} alt="" />
        <div className="current-status">
          <img src={upArrow} alt="" />
          <span>{status_description}</span>
        </div>
      </div>
      <div className="overview-card-content">
        <span className='amount'>{total_amount}</span>
        <span className='amount-desc'>{amount_description}</span>
      </div>
    </div>
  )
}

export default Overview
