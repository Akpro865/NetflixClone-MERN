import Home from './components/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Watch from './pages/Watch'
import Topbar from './pages/dashboard/Topbar'
import Sidebar from './pages/dashboard/Sidebar'
import DashHome from './pages/dashboard/components/DashHome'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './pages/dashboard/components/UserList'
import User from './pages/dashboard/components/User'

function App() {
  return (
  	<Router>     
      <Topbar />
      <div className='flex'>
     	  <Sidebar />           
        <Routes>
         {/* <Route path="/" exact element={<DashHome />} /> */}      
         <Route path="/users" element={<UserList />} />
         <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
  </Router>
  )
}

export default App
