import React from 'react'
import '../../assets/css/AdminCss/ViewStudentList.css'
import AdminHeader from './AdminHeader'
import SideBar from './SideBar'
import '../../assets/css/AdminCss/ViewStudentList.css'
import Student from '../../assets/others/Student'

const ViewStudentList = () => {
  const stu = Student.map((items) =>
        <tbody>
          <tr>
            <td>{items.student_id}</td>
            <td>{items.studentname}</td>
            <td>{items.fathername}</td>
            <td>{items.mothername}</td>
            <td>{items.gender}</td>
            <td>{items.age}</td>
            <td>{items.nationality}</td>
            <td>{items.address}</td>
            <td>{items.mobileno}</td>
            <td>{items.sslc}</td>
            <td>{items.hsc}</td>
            <td>{items.diplomo}</td>
            <td>{items.eligible}</td>
            <div className='tab-but'>
              {/* <button>EDIT</button> */}
              <button style={{"background-color":"red"}}>DELETE</button>
            </div>
          </tr>
        </tbody>
  );
  return (
    <div className='admin-main-ins'>
      <div className="admincon">
        <AdminHeader/>
        <SideBar/>
        <div className='adm-stulist-maincon-view'>
        <table className='adm-stulist-content-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>FATHER</th>
                <th>MOTHER</th>
                <th>GENDER</th>
                <th>AGE</th>
                <th>NATIONALITY</th>
                <th>ADDRESS</th>
                <th>MOBILE</th>
                <th>SSLC</th>
                <th>HSC</th>
                <th>DIPLOMO</th>
                <th>ELIGIBLE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            {stu}
            </table>
        </div>
      </div>
    </div>
  )
}

export default ViewStudentList
