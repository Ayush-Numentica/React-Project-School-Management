import React from 'react'
import "./Total_Students.css"
import optionImg from "../../assets/DashBoard/Group 59.svg"
import boyImg from "../../assets/DashBoard/bx-male 1.svg"
// import boyImg from "../../assets/DashBoard/bx-male 1.svg"
import girlImg from "../../assets/DashBoard/bx-female 1.svg"

const Donut = ({ percent, color, size = 200, strokeWidth = 25, children }) => {
  const vbSize = size
  const radius = (vbSize - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const dash = (circumference * percent) / 100
  return (
    <div className="chart-outerline">
      <svg
        className="ring-svg"
        width="100%"
        height="100%"
        viewBox={`0 0 ${vbSize} ${vbSize}`}
      >
        <g transform={`rotate(180 ${vbSize / 2} ${vbSize / 2})`}>
          <circle
            cx={vbSize / 2}
            cy={vbSize / 2}
            r={radius}
            fill="none"
            stroke="#ECECEC"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={vbSize / 2}
            cy={vbSize / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
        </g>
      </svg>
      <div className="chart-innerline">
        {children}
      </div>
    </div>
  )
}

const Total_Students = ({boy_percent, girl_percent}) => {
  return (
    <div className='total-student-container'>
      <div className="student-info-header">
        <span>Students</span>
        <button>
          <img src={optionImg} alt="" />
        </button>
      </div>
      <div className="gender-summary">
        <div className="gender-chart">
          <div className="chart">
            <Donut percent={boy_percent} color="#CFCBFF">
              <img src={boyImg} alt="" />
              <p>{boy_percent}<span>%</span></p>
            </Donut>
          </div>
          <div className="chart">
            <Donut percent={girl_percent} color="#FFE48B">
              <img src={girlImg} alt="" />
              <p>{girl_percent}<span>%</span></p>
            </Donut>
          </div>
        </div>
        <div className="gender-count">
          <ul className='gender-list'>
            <li className='boys'>3,178 <span>( boys )</span></li>
            <li className='girls'> 2,731 <span>( Girls )</span></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Total_Students
