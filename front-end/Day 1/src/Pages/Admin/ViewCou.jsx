import React from 'react'
import AdminHeader from './AdminHeader'
import SideBar from './SideBar'
import course_details from '../../assets/others/CourseDetails'
import '../../assets/css/AdminCss/ViewCou.css'

const ViewCou = () => {
  const course_detail = course_details.map((items) =>
        <tbody>
          <tr>
            <td>{items.id}</td>
            <td>{items.course_name}</td>
            <td>{items.duration}</td>
            <td>{items.description}</td>
            <td>{items.availableseats}</td>
            <td>{items.institution}</td>
            <div className='tab-but'>
              <button>EDIT</button>
              <button>DELETE</button>
            </div>
          </tr>
        </tbody>
  );
  return (
    <div className='admin-main-ins'>
      <div className="admincon">
        <AdminHeader/>
        <SideBar/>
        <div className='adm-cou-maincon-view'>
        <table className='adm-cou-content-table'>
            <thead>
              <tr>
                <th>COURSE ID</th>
                <th>COURSE NAME</th>
                <th>DURATION</th>
                <th>DESCRIPTION</th>
                <th>AVAILABLE SEATS</th>
                <th>INSTITUTION</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            {course_detail}
            </table>
        </div>
      </div>
    </div>
  )
}

export default ViewCou
