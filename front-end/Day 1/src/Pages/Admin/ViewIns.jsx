import React from 'react'
import AdminHeader from './AdminHeader'
import SideBar from './SideBar'
import institute_details from '../../assets/others/InstituteDetails'
import '../../assets/css/AdminCss/ViewIns.css'


const ViewIns = () => {
  const insitute_details = institute_details.map((items) =>
        <tbody>
          <tr>
            <td>{items.id}</td>
            <td>{items.institute_name}</td>
            <td>{items.description}</td>
            <td>{items.location}</td>
            <td>{items.contact}</td>
            <td>{items.email}</td>
            <td>{items.courseAvail}</td>
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
        <div className='adm-ins-maincon-view'>
          <table className='adm-ins-content-table'>
          <thead>
              <tr>
                <th>INSTITUTE ID</th>
                <th>INSTITUTE NAME</th>
                <th>DESCRIPTION</th>
                <th>LOCATION</th>
                <th>CONTACT</th>
                <th>EMAIL</th>
                <th>AVAILABLE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            {insitute_details}
            </table>
        </div>
      </div>
    </div>
  )
}

export default ViewIns
