import React from 'react' ;
import "../../assets/css/LogoutHeader.css"
import { Link } from 'react-router-dom';

const LogoutHeader = () => {
    return (
        <div className='header-container'>
            <h1>TECHTITAN <span>Admission Center</span></h1>
            <div className='menu-item'>
            <ul>
                <li>
                    <Link to="/studentHome">Home</Link>
                </li>
                <li>
                    <Link to="/studentViewInstitute">Institutes</Link>
                </li>
                <li>
                    <Link to="/studentViewCourse">Courses</Link>
                </li>
                <li>
                    <Link to="/studentAddStudentDetails">Student Details</Link>
                </li>
                <li><Link to="/studentCheckAdmission">Status</Link></li>
                <li><Link to="/studentMakePayment">Payment</Link></li>
                <li><Link to="/studentPaymentHistory">Payment History</Link></li>
            </ul>
            </div>
            <div className='dropdown'>
            <button class="dropbtn">Login
                </button>
                <div class="dropdown-content">
                <Link to="/loginStudent">Student Login</Link>
                <Link to="/loginAdmin">Admin Login</Link>
            </div>
            </div>
        </div>
    )
}

export default LogoutHeader ;