import React from 'react'
import "./School_info_card.css"
import optionIcon from "../../assets/DashBoard/Group 59.svg"

const School_info_card = ({card_title, background_color, total_count}) => {
  return (
    <div className={`school-info-card ${background_color} `}>
      <div className="school-info-card-header">
        <span>{card_title}</span>
        <img src={optionIcon} alt="" />
      </div>
      <span className='card-total-count'>
        {total_count}
      </span>
    </div>
  )
}

export default School_info_card
