import React from 'react'
import AdminHeader from './AdminHeader'
import SideBar from './SideBar'
import { useState } from 'react';
import Chart from "react-apexcharts";
import '../../assets/css/AdminCss/AdminDashboard.css'

const AdminDashboard = () => {
    const [state] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["SKCT", "Anna University", "Hindustan", "Karpagam", "Loyolo"]
          }
        },
        series: [
          {
            name: "series-1",
            data: [20, 20, 6, 8, 18]
          }
        ]
      })
  return (
    <div className='admin-main-dash'>
      <div className="admincon">
        <AdminHeader/>
        <SideBar/>
        <div className='adm-dash-maincon'>
        <section className="dashboard">
                   <h1>DASHBOARD</h1>
                 <div className="top">
                        <div className="first-panel">
                             <label className="cust">6</label> 
                             <label className="cust-name">No. of. Institutes</label> 
                        </div>
                        <div className="first-panel">
                     
                     
                     
                        <label className="cust">15</label> 
                             <label className="cust-name">No. of. Courses</label>
                        </div>
                        <div className="first-panel">
                        <label className="cust">12,000</label> 
                             <label className="cust-name">No. of. Site Visits</label> 
                        </div>
                  </div>
                        <div className="content">
                              <h1>Most Visited Insurances</h1>
                              <div className='chart'>
                                    <Chart className="chart1"
                                          options={state.options}
                                          series={state.series}
                                          type="bar"
                                          width="600"
                                    />
                                    <Chart className="chart2"
                                          options={state.options}
                                          series={state.series}
                                          type="line"
                                          width="600"
                                    />
                              </div>
                              
                        </div>
            </section>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
