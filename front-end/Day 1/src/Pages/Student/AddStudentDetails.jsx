import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from '../Admin/SideBar'
import "../../assets/css/AddStudentDetails.css"

const AddStudentDetails = () => {
  return (
    <div>
    <StudentHeader/>  
    <div className='addstu-main'>
      
      <div className="studentins-main">
        <h1>Student Form</h1>
        <div className="form-con">
            <div className="firsthalf">
                <input type="text" name="stname" placeholder='Student Name' />
                <input type="text" name="stname" placeholder="Father's Name" />
                <input type="text" name="stname" placeholder="Mother's Name" />
                <select name="gender" id="">
                  <option value="gender" hidden>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                <input type="text" name="stname" placeholder='Age' />
                <input type="text" name="stname" placeholder='Nationality' />
            </div>
            <div className="secondhalf">
                <input type="text" name="stname" placeholder='Address' />
                <input type="text" name="stname" placeholder='Mobile No' />
                <input type="text" name="stname" placeholder='SSLC Mark' />
                <input type="text" name="stname" placeholder='HSC Mark' />
                <input type="text" name="stname" placeholder='Diplomo Mark' />
                <select name="eligibility" id="">
                  <option value="eligible" hidden>Eligiblity</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
            </div>
        </div>
        <button>Submit</button>

      </div>
    </div>
    </div>
  )
}

export default AddStudentDetails
