import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Teacher from './pages/Teacher/Teacher.jsx'
import Student from './pages/Students/Student.jsx'
import Finance from './pages/Finance/Finance.jsx'
import Calender from './pages/Calender/Calender.jsx'
import TimeTable from './pages/TimeTable/TimeTable.jsx'
import Message from './pages/Message/Message.jsx'
import Setting from './pages/Setting/Setting.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Student_Form from './pages/Student Form/Student_Form.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Dashboard />} />
      <Route path='teacher' element={<Teacher />} />
      <Route path='student' element={<Student />} />
      <Route path='student/AddNew' element={<Student_Form />}/>
      <Route path='finance' element={<Finance />} />
      <Route path='calender' element={<Calender />} />
      <Route path='timetable' element={<TimeTable />} />
      <Route path='message' element={<Message />} />
      <Route path='setting' element={<Setting />} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/> 
  </StrictMode>,
) 
