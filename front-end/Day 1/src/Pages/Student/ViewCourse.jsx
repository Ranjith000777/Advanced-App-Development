import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from '../Admin/SideBar'
import "../../assets/css/ViewCourse.css"
import course_details from '../../assets/others/CourseDetails'
import { useNavigate } from 'react-router-dom'

const ViewCourse = () => {
  const navigate = useNavigate();
  function handleEnroll(){
    navigate("/studentGetAdmission")
  }
  const listItems = course_details.map((items) =>
    <div className='card' key={items.id}>
      <div className="cardheader">
        <h2>{items.course_name}</h2>
        <p>{items.description}</p>
        <p>Duration: <span>{items.duration}</span></p>
        <p>Available seats: <span>{items.availableseats}</span></p>
        <p>Institution: <span>{items.institution}</span></p>
        <div className="button-enroll">
          <button onClick={handleEnroll}>Enroll Now</button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
    <StudentHeader/>  
    <div className='cou-main'>
      
      <div className="course-main">
        {listItems}
      </div>
    </div>
    </div>
  )
}

export default ViewCourse
