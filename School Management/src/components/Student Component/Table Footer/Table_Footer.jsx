import React from 'react'
import "./Table_Footer.css"

const Table_Footer = () => {
  return (
    <div className='footer-container'>

        <button className='navigation-button'>
            Previous
        </button>
        <span>Page 1 of 12</span>
        <button className="navigation-button">
            Next
        </button>
      
    </div>
  )
}

export default Table_Footer
