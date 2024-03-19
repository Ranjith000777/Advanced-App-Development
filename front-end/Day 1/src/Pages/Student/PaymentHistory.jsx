import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from '../Admin/SideBar'
import "../../assets/css/PaymentHistory.css"
import DataTable from 'react-data-table-component' ;
import institute_details from '../../assets/others/InstituteDetails';
import payment_details from '../../assets/others/PaymentTable';

const PaymentHistory = () => {
  const listPayment = payment_details.map((items) =>
        <tbody>
          <tr>
            <td>{items.paymentid}</td>
            <td>{items.studentid}</td>
            <td>{items.studentname}</td>
            <td>{items.status}</td>
            <td>{items.amount}</td>
            <td>{items.paydate}</td>
            <td>{items.paymentmode}</td>
          </tr>
        </tbody>
  );
  return (
    <div>
    <StudentHeader/>  
    <div className='his-main'>
      
      <div className="studentins-main">
        <table className='content-table'>
        <thead>
          <tr>
            <th>PAYMENT ID</th>
            <th>STUDENT ID</th>
            <th>STUDENT NAME</th>
            <th>STATUS</th>
            <th>TOTAL AMOUNT</th>
            <th>PAYMENT DATE</th>
            <th>MODE OF PAYMENT</th>
          </tr>
        </thead>
        {listPayment}
      </table>
      </div>
    </div>
    </div>
  )
}

export default PaymentHistory
