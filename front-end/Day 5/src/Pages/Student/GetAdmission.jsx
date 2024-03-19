import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from '../Admin/SideBar'
import "../../assets/css/GetAdmission.css"

const GetAdmission = () => {
  return (
    <div>
    <StudentHeader/>  
    <div className='adm-main'>
      
      <div className="studentinsta-main">
      <h1>Enrollment Form</h1>
        <div className="form-adm">
            <div className="firsthalf">
                <input type="text" name="stname" placeholder='Course Name' />
                <input type="text" name="stname" placeholder="Student Name" />
                <input type="text" name="stname" placeholder="Institute Name" />
                <input type="text" name="stname" placeholder='Course Description' />
                <input type="text" name="stname" placeholder='Course Fees' />
            </div>
            <div className="enr">
              <button className="enrollbut">
                Enroll
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default GetAdmission
