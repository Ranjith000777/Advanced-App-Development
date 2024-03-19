import React from 'react'
import '../../assets/css/AdminCss/ViewPayment.css'
import SideBar from './SideBar'
import AdminHeader from './AdminHeader'
import payment_details from '../../assets/others/PaymentTable'
import '../../assets/css/AdminCss/ViewPayment.css'

const ViewPayment = () => {
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
            <div className='tab-but'>
              {/* <button>EDIT</button> */}
              <button style={{background:"red"}}>DELETE</button>
            </div>
          </tr>
        </tbody>
  );
  return (
    <div className='admin-main-ins'>
      <div className="admincon">
        <AdminHeader/>
        <SideBar/>
        <div className='adm-pay-maincon-view'>
        <table className='adm-pay-content-table'>
            <thead>
              <tr>
                <th>PAYMENT ID</th>
                <th>STUDENT ID</th>
                <th>STUDENT NAME</th>
                <th>STATUS</th>
                <th>TOTAL AMOUNT</th>
                <th>PAYMENT DATE</th>
                <th>MODE OF PAYMENT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {listPayment}
            </table>
        </div>
      </div>
    </div>
  )
}

export default ViewPayment
