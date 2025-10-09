import React from 'react'
import "./Form_Card.css"

const Form_Card = ({cardName,children}) => {
  return (
    <div className='form-card'>
       <div className="card-header">
        <span>{cardName}</span>
       </div>
        <div className='information-area'>
            {children}
        </div>
    </div>
  )
}

export default Form_Card
