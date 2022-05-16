import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoint from './Pages/Appointment/Appoint';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAuth/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appoint></Appoint>
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
           <Route index element={<MyAppointment></MyAppointment>} />
           <Route path='myreview' element={<MyReview></MyReview>} />
           <Route path='myhistory' element={<MyHistory></MyHistory>} />
           <Route path='users' element={<RequireAdmin>
            <Users></Users>
           </RequireAdmin>} />
           </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
