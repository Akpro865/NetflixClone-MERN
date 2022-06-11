import Topbar from './pages/dashboard/Topbar'
import Sidebar from './pages/dashboard/Sidebar'
import DashHome from './pages/dashboard/components/DashHome'
import UserList from './pages/dashboard/components/UserList'
import User from './pages/dashboard/components/User'
import NewUser from './pages/dashboard/components/NewUser'
import ProductList from './pages/dashboard/components/ProductList'
import Product from './pages/dashboard/components/Product'
import NewProduct from './pages/dashboard/components/NewProduct'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App2() {
  return (
  	<Router>     
      <Topbar />
      <div className='flex'>
     	  <Sidebar />           
        <Routes>
         <Route path="/" exact element={<DashHome />} />      
         <Route path="/users" element={<UserList />} />
         <Route path="/user/:userId" element={<User />} />
         <Route path="/newuser" element={<NewUser />} />
         <Route path="/products" element={<ProductList />} />
         <Route path="/product/:productId" element={<Product />} />
         <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
  </Router>
  )
}

export default App2