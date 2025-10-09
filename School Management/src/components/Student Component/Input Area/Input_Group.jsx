import React from 'react'
import "./Input_Group.css"

const Input_Group = ({ name, placeholderName, input_type }) => {
    return (
        <div className='input-group'>

            <label htmlFor={name}>{name}</label>
            <div className='form-input'>
                <input type={input_type} placeholder={placeholderName} />
            </div>

        </div>
    )
}

export default Input_Group
