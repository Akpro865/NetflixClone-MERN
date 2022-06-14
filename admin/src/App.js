import Topbar from './dashboard/Topbar'
import Sidebar from './dashboard/Sidebar'
import DashHome from './dashboard/components/DashHome'
import UserList from './dashboard/components/UserList'
import User from './dashboard/components/User'
import NewUser from './dashboard/components/NewUser'
import ProductList from './dashboard/components/ProductList'
import Product from './dashboard/components/Product'
import NewProduct from './dashboard/components/NewProduct'
import Login from './dashboard/pages/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <Router>
    <Routes>
    <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
    </Routes>
    {user && (
      <>
    <Topbar />
      <div className='flex'>
      <Sidebar />
        <Routes>         
         <Route path="/" exact element={user ? <DashHome /> : <Navigate to='/login' />} />      
         <Route path="/users" element={<UserList />} />
         <Route path="/user/:userId" element={<User />} />
         <Route path="/newuser" element={<NewUser />} />
         <Route path="/products" element={<ProductList />} />
         <Route path="/product/:productId" element={<Product />} />
         <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
      </>
    )} 
  </Router>
  )
}

export default App