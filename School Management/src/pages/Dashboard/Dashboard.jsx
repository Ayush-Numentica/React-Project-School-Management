import React from 'react'
import optionIcon from "../../assets/DashBoard/Group 59.svg"
import "./Dashboard.css"
import Earning_chart from '../../components/Earning chart Component/Earning_chart'
import Fee_Status from '../../components/Fee Status Component/Fee_Status'
import Message_Box from '../../components/Message Box Component/Message_Box'
import Welcome_Banner from '../../components/Welcome Banner Component/Welcome_Banner'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-container-top">
        <div className="dashboard-top-left">
          <Welcome_Banner />
          
        </div>
        <div className="dashboard-top-right">
          ayush
        </div>
      </div>
      <div className="dashboard-container-bottom">
        <div className="dashboard-bottom-left">
          <Earning_chart />
        </div>
        <div className="dashboard-bottom-right">
          <Fee_Status />
          <Message_Box />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
