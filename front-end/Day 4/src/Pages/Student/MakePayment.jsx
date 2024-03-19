import React from 'react'
import StudentHeader from './StudentHeader'
import SideBar from '../Admin/SideBar'
import { useState } from 'react'
import "../../assets/css/MakePayment.css"

const MakePayment = () => {
  const [amount, setAmount] = useState("")
  const handlePay = (e) =>{
    e.preventDefault() ;
    if(amount === "")
    {
      alert("Enter amount") ;
    }
    else{
      var options = {
        key: "rzp_test_E8lNFkv2zX4FED",
        key_secret:"vPqFI43fRnrTtxrqCiWK4FMr",
        amount: amount *100,
        currency:"INR",
        name:"TechTitansAdmissionPortal",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Ranjith",
          email:"cseskct204ranjith.v@gmail.com",
          contact:"6374216742"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div>
    <StudentHeader/>  
    <div className='pay-main'>
      
      <div className="studentins-main">
      <h1>Course Payment</h1>
        <div className="form-adm">
            <div className="firsthalf">
                <input type="text" name="stname" placeholder='Student Id' />
                <input type="text" name="stname" placeholder="Course Id" />
                <input type="text" name="stname" placeholder="Total Amount" value={amount} onChange={(e) =>setAmount(e.target.value)} />
                {/* <select type="text" name="stname" placeholder='Mode of Payment'>
                  <option value="payment">Mode Of Payment</option>
                  <option value="gpay">GPay</option>
                  <option value="Paytm">Paytm</option>
                  <option value="NetBanking">Net Banking</option>
                </select> */}
                <input type="text" name="stname" placeholder='Payment Date' />
            </div>
            <div className="enr">
              <button className="enrollbut" onClick={handlePay}>
                Enroll
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default MakePayment
