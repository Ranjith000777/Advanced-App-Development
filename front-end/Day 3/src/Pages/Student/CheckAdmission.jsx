import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from '../Admin/SideBar'
import '../../assets/css/CheckAdmission.css'
import student_details from '../../assets/others/Studentstatus'

const CheckAdmission = () => {
  const listStudent = student_details.map((items) =>
        <tbody>
          <tr>
            <td>{items.admission_id}</td>
            <td>{items.studentname}</td>
            <td>{items.coursename}</td>
            <td>{items.institute_name}</td>
            <td>{items.status}</td>
            <td>
              <button className='actionbut'>MAKE PAYMENT</button>
            </td>
          </tr>
        </tbody>
  );
  return (
    <div>
    <StudentHeader/>  
    <div className='ch-main'>
      
      <div className="studentcheck-main">
      <table className='content-table'>
        <thead>
          <tr>
            <th>ADMISSION ID</th>
            <th>STUDENT NAME</th>
            <th>COURSE NAME</th>
            <th>INSTITUTE NAME</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        {listStudent}
      </table>
      </div>
    </div>
    </div>
  )
}

export default CheckAdmission
