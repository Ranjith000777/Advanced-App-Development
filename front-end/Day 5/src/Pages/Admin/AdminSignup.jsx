import React from 'react'
import video1 from '../../assets/videos/4.mp4'
import '../../assets/css/AdminSignup.css'
import { Link } from 'react-router-dom'

const AdminSignup = () => {
  return (
    <div>
      <div className="signup-container-adm">
        <video src={video1} autoPlay loop muted></video>
        <div className="signup-sub-adm">
            <div className="signup-con-adm">    
                <h1>ADMIN SIGNUP</h1>
                <p>Enter your Credientials</p>
                <input type="text" placeholder='Admin Code' />
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='E-Mail' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
                <button>Login</button>
                <span>Already Have an Account? <Link className='link-re' to="/loginAdmin">Login Here</Link></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSignup
