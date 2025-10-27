import React from 'react'
import "./Overview_Main_Card.css"
import Overview from '../Overview Component/Overview'

const Overview_Main_Card = ({ overView_card_title, button_1, button_2}) => {
  return (
    <div className='Overview-main-container'>
      <div className="overview-header">
        <div className="title">
          <span>{overView_card_title}</span>
        </div>
        <div className="header-buttons">
          <div className="classes-dropdown">
            <select name="All Classes" id="">
              <option value="All Classes">{button_1}</option>
              <option value="Class 11">2022-23</option>
              <option value="Class 11">2021-22</option>
              
            </select>
          </div>
          <div className="classes-dropdown">
            <select name="All Classes" id="">
              <option value="All Classes">{button_2}</option>
              <option value="Class 11">Half Yearly</option>
              <option value="Class 11">Quarterly</option>
              <option value="Class 11">Monthly</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overview-content">
        <Overview total_amount="₹29,545,000" amount_description="Total Income" status_description="12%" />
        <Overview total_amount="₹19,291,266" amount_description="Total Expenses" status_description="0.5%" />
      </div>
    </div>
  )
}

export default Overview_Main_Card
