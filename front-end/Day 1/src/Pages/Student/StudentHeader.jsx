import React from 'react' ;
import "../../assets/css/StudentHeader.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../UserSlice';

const StudentHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handlenavigate(e){
        e.preventDefault() ;

        dispatch(logout()) ;
        navigate("/")
    }
    return (
        <div className='header-container'>
            <h1>TECHTITAN <span>Admission Center</span></h1>
            <div className='menu-item'>
            <ul>
                
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
            <button className="logoutbutton" onClick={(e) => handlenavigate(e)}>LogOut</button>
        </div>
    )
}

export default StudentHeader ;