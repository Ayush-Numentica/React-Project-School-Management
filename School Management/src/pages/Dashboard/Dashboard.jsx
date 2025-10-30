import React from 'react'
import optionIcon from "../../assets/DashBoard/Group 59.svg"
import "./Dashboard.css"
import Earning_chart from '../../components/Earning chart Component/Earning_chart'
import Fee_Status from '../../components/Fee Status Component/Fee_Status'
import Message_Box from '../../components/Message Box Component/Message_Box'
import Welcome_Banner from '../../components/Welcome Banner Component/Welcome_Banner'
import Total_Students from '../../components/Total Student Component/Total_Students'
import Notice_Board from '../../components/Notice Board Component/Notice_Board'
import School_info from '../../components/School Info Card Component/School_info_card'
import Calendar from '../../components/Calendar Component/Calendar'
import Overview_Main_Card from '../../components/OverView Main Card/Overview_Main_Card'
import School_info_card from '../../components/School Info Card Component/School_info_card'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-container-top">
        <div className="dashboard-top-left">
          <Welcome_Banner />
          <div className="totalstudent-noticeboard">
            <Total_Students boy_percent="53" girl_percent="47"/>
            <Notice_Board />
          </div>
        </div>
        <div className="dashboard-top-right">
          <div className="schoolinfo-calendar">
            <div className="school-info">
              <School_info_card card_title="Students" background_color="yellow" total_count="5,909"/>
              <School_info_card card_title="Teachers" background_color="purple" total_count="60"/>
              <School_info_card card_title="Employee" background_color="yellow" total_count="100"/>
            </div>
              <Calendar />
            
          </div>
          <div className="summary-card"> 
            <Overview_Main_Card overView_card_title="Financial Overview" button_1="2023-24" button_2="Annual" />
          </div>
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
