import React from 'react'
import "./Tabular_Header.css"
import settingIcon from "../../../assets/Students/setting-3.svg"
import searchIcon from "../../../assets/Header/search-icon.svg"

const Tabular_Header= ({table_name,search_input,button_1, children}) => {
  return (
    <div className="tabular-info-header">
      <span>{table_name}</span>
      <div className="tabular-info-header-right">
        <button className='setting-button'>
          <img src={settingIcon} alt="" />
        </button>
        <div className="search-bar table-search-bar">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder={search_input} />
        </div>
        <div className="classes-dropdown">
          <select name="All Classes" id="">
            <option value="All Classes">{button_1}</option>
            <option value="Class 11">Class 12</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 11">Class 10</option>
          </select>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Tabular_Header
