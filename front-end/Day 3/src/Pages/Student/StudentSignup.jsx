import React from 'react'
import video1 from '../../assets/videos/2.mp4'
import '../../assets/css/StudentSignup.css'
import { Link } from 'react-router-dom'

const StudentSignup = () => {
  return (
    <div>
      <div className="signup-container">
        <video src={video1} autoPlay loop muted></video>
        <div className="signup-sub">
            <div className="signup-con">    
                <h1>STUDENT SIGNUP</h1>
                <p>Enter your Credientials</p>
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='E-Mail' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
                <button>Login</button>
                <span>Already Have an Account? <Link className='link-re' to="/loginStudent">Login Here</Link></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSignup
