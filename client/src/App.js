import Home from './components/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Watch from './pages/Watch'
import Topbar from './pages/dashboard/Topbar'
import Sidebar from './pages/dashboard/Sidebar'
import DashHome from './pages/dashboard/components/DashHome'
import './App.css';

function App() {
  return (
  	<div>
     <Topbar />
     <div className='flex'>
     	<Sidebar />
     	<DashHome />
     </div>
     
    </div>
  )
}

export default App
