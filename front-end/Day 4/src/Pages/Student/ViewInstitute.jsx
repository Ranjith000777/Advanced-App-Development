import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from '../Admin/SideBar'
import "../../assets/css/ViewInstitute.css"
import institute_details from '../../assets/others/InstituteDetails'

const ViewInstitute = () => {
  // console.log(institute_details);
  const listItems = institute_details.map((item) =>
    <div className='card' key={item.id}>
      <div className="cardheader">
        <h2><strong>{item.institute_name}</strong></h2>
        <p>{item.description}</p>
        <p>Location: <span>{item.location}</span></p>
        <p>Contact number: <span>{item.contact}</span></p>
        <p>Email: <span>{item.email}</span></p>
        <p>Course Available: <span>{item.courseAvail}</span></p>
      </div>
    </div>
  );
  return (
    <div>
    <StudentHeader/>  
    <div className='ins-main'>
      <div className="institute-main">
        {listItems}
      </div>
    </div>
    </div>
  )
}

export default ViewInstitute
