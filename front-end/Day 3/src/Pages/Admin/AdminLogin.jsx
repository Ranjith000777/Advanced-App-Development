import React from 'react'
import video1 from '../../assets/videos/3.mp4'
import '../../assets/css/StudentLogin.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../UserSlice'
import { useUser } from '../UserContext'

const AdminLogin = () => {
  const { login: userLogin } = useUser();
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const navigate = useNavigate() ;
  const dispatch = useDispatch() ;
  const handleAdminLogin = (e) => {
    e.preventDefault() ;
    if(email === "admin@gmail.com" && password === "12345")
    {
      alert("Successfully Login") ;
      userLogin();
      e.preventDefault() ;
      dispatch(login({ email: email, password:password }));
      navigate("/adminAddInstitute") ;
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
                <h1>ADMIN LOGIN</h1>
                <p>Enter your Credientials</p>
                <input type="text" placeholder='E-Mail' name={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' name={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleAdminLogin}>Login</button>
                <span>Don't Have an Account? <Link className='link-re' to="/signupAdmin">Register Here</Link></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
