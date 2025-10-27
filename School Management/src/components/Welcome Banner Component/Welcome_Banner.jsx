import React from 'react'
import "./Welcome_Banner.css"
import bannerImage from "../../assets/DashBoard/Humaaans Research.svg"

const Welcome_Banner = () => {
  return (
    <div className='welcome-banner'>
      <article>
        <span>Welcome, Laurel Higher Secondary School Team!</span>
        <p>Manage your school operations with ease. Stay updated on academics, <br/>attendance, finances, and more—all in one place. Let’s keep shaping a brighter future together!</p>
      </article>
      <img src={bannerImage} alt="" />
    </div>
  )
}

export default Welcome_Banner
