import React from 'react'
import "./Student_Form.css"
import Form_Card from '../../components/Student Component/Form Card/Form_Card'
import Input_Group from '../../components/Student Component/Input Area/Input_Group'
import uploadIcon from '../../assets/Students/Group 2.svg'

const Student_Form = () => {
    return (
        <div className='form-description'>
            <div className="page-header">
                <span>Add New Students</span>
                <div className="action-buttons">
                    <button>cancel</button>
                    <button>reset</button>
                    <button className='save-button'>save</button>
                </div>
            </div>

            <div className="form-cards">
                <div className="left-form-card">
                    <div className="info">
                        <Form_Card cardName="Basic Information">
                            <div className="info-boxes">
                                <div className="info-box-left">
                                    <Input_Group name="First Name" placeholderName="First Name" input_type="text" />
                                    <div className="input-group group-size">
                                        <label htmlFor="Gender">Gender</label>
                                        <div className="radio-button">
                                            <div className='gender-radio-button'>
                                                <input type="radio" />
                                                <label htmlFor="Male">Male</label>
                                            </div>
                                            <div className='gender-radio-button'>
                                                <input type="radio" />
                                                <label htmlFor="Female">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <Input_Group name="Date of Birth" placeholderName="dd/mm/yyyy" input_type="date" />
                                    <div className="selection-dropdowns">
                                        <select name="Class" id="">
                                            <option value="Class">Class</option>
                                            <option value="Class 12">Class 12</option>
                                            <option value="Class 12">Class 11</option>
                                            <option value="Class 12">Class 10</option>
                                        </select>
                                        <select name="Section" id="">
                                            <option value="Section">Section</option>
                                            <option value="Section A">A</option>
                                            <option value="Section B">B</option>
                                            <option value="Section C">C</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="info-box-right">
                                    <Input_Group name="Last Name" placeholderName="Last Name" input_type="text" />
                                    <div className="upload-section">
                                        <img src={uploadIcon} alt="" />
                                        <span>Drop your files to upload</span>
                                        <button>Select files</button>
                                    </div>
                                </div>
                            </div>
                        </Form_Card>
                    </div>
                    <div className="info">
                        <Form_Card cardName="Parent Details">
                            <div className="info-boxes">
                                <div className="info-box-left">
                                    <Input_Group name="Father's Name" placeholderName="First Name" input_type="text" />
                                    <Input_Group name="Father Contact" placeholderName="Contact" input_type="number" />
                                    <Input_Group name="Father Occupation" placeholderName="Ex: Business" input_type="text" />
                                </div>
                                <div className="info-box-right">
                                    <Input_Group name="Mother's Name" placeholderName="First Name" input_type="text" />
                                    <Input_Group name="Mother Contact" placeholderName="Contact" input_type="number" />
                                    <Input_Group name="Annual Income" placeholderName="1,00,000" input_type="number" />
                                </div>
                            </div>
                        </Form_Card>
                    </div>
                </div>
                <div className="right-form-card">
                    <Form_Card cardName="Login/Account Details">
                        <div className='login-input'>
                            <div className='form-input info-box-left'>
                                <input type="text" placeholder="UserName" />
                            </div>
                            <div className='form-input'>
                                <input type="text" placeholder="Password" />
                            </div>
                        </div>
                    </Form_Card>
                    <Form_Card cardName="Contact Information">
                        <div className="info-boxes">
                            <div className="info-box-left">
                                <Input_Group name="Phone" placeholderName="Contact Number" input_type="number" />
                                <Input_Group name="Address" placeholderName="Area and Street" input_type="text" />
                                <div>
                                    <div className='form-input'>
                                        <input type="text" placeholder="Location" />
                                    </div>
                                </div>
                                <div>
                                    <div className='form-input'>
                                        <input type="number" placeholder="Pincode" />
                                    </div>
                                </div>
                            </div>
                            <div className="info-box-right address-box">
                                <Input_Group name="Email" placeholderName="example@gmail.com" input_type="text" />
                                <div className='dist-state'>
                                    <div>
                                        <div className='form-input'>
                                            <input type="text" placeholder="Location" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='form-input'>
                                            <input type="number" placeholder="Pincode" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Form_Card>
                    <Form_Card cardName="Additional Information">
                        <div className="additional-info">
                            <div className="additional-info-radio">
                                <div className="radio-style">
                                    <input type="radio" />
                                    <label htmlFor="DayScholar">Day Scholar</label>
                                </div>
                                <div className="radio-style">
                                    <input type="radio" />
                                    <label htmlFor="Hosteller">Hosteller</label>
                                </div>
                            </div>
                            <div className="additional-info-radio">
                                <div className="radio-style">
                                    <input type="radio" />
                                    <label htmlFor="Transport">Transport</label>
                                </div>
                                <div className="radio-style">
                                    <input type="radio" />
                                    <label htmlFor="Non Transport">Non Transport</label>
                                </div>
                            </div>
                        </div>
                    </Form_Card>
                </div>
            </div>


        </div>
    )
}

export default Student_Form
