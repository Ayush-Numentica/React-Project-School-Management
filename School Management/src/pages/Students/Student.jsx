import React from 'react'
import plusIcon from "../../assets/Students/plus.svg"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "./Student.css"
import Tabular_Header from '../../components/Student Component/Student Table Header/Tabular_Header'
import Tabular_data from '../../components/Student Component/Table Info/Tabular_data'
import Table_Footer from '../../components/Student Component/Table Footer/Table_Footer'


const Student = () => {

    const navigate = useNavigate();
    const goToFormSection = () => {
        navigate("/student/AddNew")
    }
    return (
        <div className='students-info'>
            <div className="description-bar">
                <span>Students</span>
                <div className="new-addition" onClick={goToFormSection}>
                    <span>Add New</span>

                    <div className="add-button">
                        <img src={plusIcon} alt=""  />

                    </div>

                </div>
            </div>
            <div className="student-tabular-info">
                <Tabular_Header table_name="All Student List" search_input="Search by Name or Roll" button_1="All Classes" />
                <Tabular_data />
                <Table_Footer />

            </div>
            <Outlet />
        </div>
    )
}

export default Student
