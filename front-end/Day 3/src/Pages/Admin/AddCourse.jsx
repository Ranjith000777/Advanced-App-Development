import React from 'react'
import '../../assets/css/AdminCss/AddCourse.css'
import AdminHeader from './AdminHeader'
import SideBar from './SideBar'

const AddCourse = () => {
  return (
    <div className='admin-main-ins'>
      <div className="admincon">
        <AdminHeader/>
        <SideBar/>
        <div className='adm-cou-maincon'>
          <div className="adm-cou-form">
              <form action="">
                <h1>Add Course Details</h1>
                <input type="text" placeholder='Course Name'/>
                <input type="text" placeholder='Description'/>
                <input type="text" placeholder='Duration'/>
                <input type="text" placeholder='Fees'/>
                <input type="text" placeholder='Number of Seats'/>
                <input type="text" placeholder='Institute'/>
                <button className='s-but'>Add Course</button>

              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddCourse
