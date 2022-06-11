import React from 'react'
import Home from './components/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Watch from './pages/Watch'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true
  
  return (
  	<Router>     
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Navigate to='/register' />} />
        <Route exact path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
        <Route exact path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        {user && (
          <>
          <Route path='/movies' element={<Home type='movie' />} />
          <Route path='/series' element={<Home type='series' />} />
          <Route path='/watch' element={<Watch />} />
          </>
        )}                                  
      </Routes>
    </Router>
  )
}

export default App
