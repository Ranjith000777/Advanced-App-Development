import React from 'react'
import '../../assets/css/AdminCss/AddInstitute.css'
import SideBar from './SideBar'
import AdminHeader from './AdminHeader'

const AddInstitute = () => {
  return (
    <div className='admin-main-ins'>
      <div className="admincon">
        <AdminHeader/>
        <SideBar/>
        <div className='adm-ins-maincon'>
            <div className="adm-ins-form">
              <form action="">
                <h1>Add Institute Details</h1>
                <input type="text" placeholder='Institute Name'/>
                <input type="text" placeholder='Institute Location'/>
                <input type="text" placeholder='Institute Contact Number'/>
                <input type="text" placeholder='Institute Description'/>
                <input type="text" placeholder='Institute Email'/>
                <input type="text" placeholder='Number of Courses Available'/>
                <button className='s-but'>Add Institute</button>

              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddInstitute
