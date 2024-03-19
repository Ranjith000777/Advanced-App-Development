import React, { useState } from 'react'
import video1 from '../../assets/videos/1.mp4'
import '../../assets/css/StudentLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../UserSlice'
import { useUser } from '../UserContext'

const StudentLogin = () => {
  const { login: userLogin } = useUser();
  
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const navigate = useNavigate() ;
  const dispatch = useDispatch() ;
  const handleStudentLogin = (e) => {
    e.preventDefault();
    if(email === "student@gmail.com" && password === "12345")
    {
      alert("Successfully Login") ;
      userLogin();
      dispatch(login({ email: email, password:password }));
      navigate("/studentViewInstitute") ;
    }
    else{
      alert("Please Enter correct Details");
    }
  }
  return (
    <div>
      <div className="login-container">
        <video src={video1} autoPlay loop muted></video>
        <div className="login-sub">
            <div className="login-con">    
                <h1>STUDENT LOGIN</h1>
                <p>Enter your Credientials</p>
                <input type="text" placeholder='E-Mail' name={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' name={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleStudentLogin}>Login</button>
                <span>Don't Have an Account? <Link className='link-re' to="/signupStudent">Register Here</Link></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin
