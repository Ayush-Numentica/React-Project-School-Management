import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='main-container'>
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="header-main-content">
        <div className="header-container">
          <Header />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
