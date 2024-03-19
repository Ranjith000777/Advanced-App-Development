import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './Pages/Student/HomePage'
import AdminLoginPage from './Pages/AdminLoginPage'
import StudentLoginPage from './Pages/StudentLoginPage'
import StudentLogin from './Pages/Student/StudentLogin'

import GetAdmission from './Pages/Student/GetAdmission'
import MakePayment from './Pages/Student/MakePayment'
import PaymentHistory from './Pages/Student/PaymentHistory'
import ViewCourse from './Pages/Student/ViewCourse'
import ViewInstitute from './Pages/Student/ViewInstitute'
import AddStudentDetails from './Pages/Student/AddStudentDetails'
import CheckAdmission from './Pages/Student/CheckAdmission'
import StudentSignup from './Pages/Student/StudentSignup'
import AdminLogin from './Pages/Admin/AdminLogin'
import AdminSignup from './Pages/Admin/AdminSignup'
import AddInstitute from './Pages/Admin/AddInstitute'
import AddCourse from './Pages/Admin/AddCourse'
import ViewAdmissionList from './Pages/Admin/ViewAdmissionList'
import ViewPayment from './Pages/Admin/ViewPayment'
import ViewStudentList from './Pages/Admin/ViewStudentList'
import ViewIns from './Pages/Admin/ViewIns'
import ViewCou from './Pages/Admin/ViewCou'
import { UserProvider, useUser } from './Pages/UserContext'
import AdminDashboard from './Pages/Admin/AdminDashboard'

function App() {

  const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useUser();
    return isUserLoggedIn ? children : <Navigate to="/" replace />;
  };

  return (
    <>
      <div>
        <UserProvider>
        <Router>
          <Routes>
            <Route path='/loginStudent' element={<StudentLogin/>}></Route>
            <Route path='/signupStudent' element={<StudentSignup/>}></Route>
            <Route path='/loginAdmin' element={<AdminLogin/>}></Route>
            <Route path='/signupAdmin' element={<AdminSignup/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/studentAddStudentDetails' element={
              <PrivateRoute>
                <AddStudentDetails/>
              </PrivateRoute>}>
            </Route>
            <Route path='/studentGetAdmission' element={<PrivateRoute>
                <GetAdmission/>
              </PrivateRoute>}></Route>
            <Route path='/studentCheckAdmission' element={<PrivateRoute>
                <CheckAdmission/>
              </PrivateRoute>}></Route>
            <Route path='/studentMakePayment' element={<PrivateRoute>
                <MakePayment/>
              </PrivateRoute>}></Route>
            <Route path='/studentPaymentHistory' element={<PrivateRoute>
                <PaymentHistory/>
              </PrivateRoute>}></Route>
            <Route path='/studentViewCourse' element={<PrivateRoute>
                <ViewCourse/>
              </PrivateRoute>}></Route>
            <Route path='/studentViewInstitute' element={<PrivateRoute>
                <ViewInstitute/>
              </PrivateRoute>}></Route>
            <Route path='/adminAddInstitute' element={<PrivateRoute>
                <AddInstitute/>
              </PrivateRoute>}></Route>
            <Route path='/adminViewIns' element={<PrivateRoute>
                <ViewIns/>
              </PrivateRoute>}></Route>

            <Route path='/adminAddCourse' element={<PrivateRoute>
                <AddCourse/>
              </PrivateRoute>}></Route>
            <Route path='/adminViewCou' element={<PrivateRoute>
                <ViewCou/>
              </PrivateRoute>}></Route>
            <Route path='/adminViewAdmissionList' element={<PrivateRoute>
                <ViewAdmissionList/>
              </PrivateRoute>}></Route>
            <Route path='/adminViewPayment' element={<PrivateRoute>
                <ViewPayment/>
              </PrivateRoute>}></Route>
            <Route path='/adminViewStudentList' element={<PrivateRoute>
                <ViewStudentList/>
              </PrivateRoute>}></Route>
            <Route path='/adminDashboard' element={<PrivateRoute>
                <AdminDashboard/>
              </PrivateRoute>}></Route>

            {/*ERROR PAGE*/}
            <Route path='*' element={<h1 style={{textAlign:"center",display:"flex",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"}}>404 Page Not Found</h1>}></Route>
            
          </Routes>
        </Router>
        </UserProvider>
      </div>
    </>
  )
}

export default App
