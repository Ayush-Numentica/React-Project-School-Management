import React from 'react'
import "./Tabular_data.css"
import studentsData from "../../../Datas/Students_Data.json"
import deleteIcon from "../../../assets/Students/deleteIcon.svg"
import editIcon from "../../../assets/Students/edit.svg"
import categoryIcon from "../../../assets/Students/category.svg"
const Tabular_data = () => {

  const columnName = Object.keys(studentsData[0])
  return (
    <div className='table-container'>
      <table className='student-data-table'>
        <thead>
          <tr>
            {columnName.map((colName) => (
              <th key={colName}>{colName}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((rowData, index) => (
            <tr key={index}>
              {columnName.map((colData) => (
                <td key={colData}>{rowData[colData]}</td>
              ))}
              <td>
                <div className='buttons'>
                  <button className='table-button'><img src={editIcon} alt="" /></button>
                  <button className='table-button'><img src={deleteIcon} alt="" /></button>
                  <button className='table-button'><img src={categoryIcon} alt="" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tabular_data
