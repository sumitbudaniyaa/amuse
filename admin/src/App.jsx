import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header'
import { useState } from 'react'
import CreateEventPage from './components/createeventpage/createeventpage'
import ScanPage from './components/scanqrpage/scanpage'
import About from './components/about/about'

function App() {
 
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <>
      {!isLoginPage && <Header  isLoggedIn={isLoggedIn}/>}
      <Routes>
         <Route path='/' element={<Login setisLoggedIn={setisLoggedIn} />}></Route>
         <Route path='/dashboard' element={<Dashboard/>}></Route>
         <Route path='/create-event' element={<CreateEventPage />}></Route>
         <Route path='/validate-qr' element={<ScanPage />}></Route>
         <Route path='/about' element={<About />}></Route>
      </Routes>
      </>
  )
}

export default App
