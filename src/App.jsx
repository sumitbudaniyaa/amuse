import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/header/header'
import Login from './components/login/login'
import Home from './components/home/Home'
import { useState } from 'react'
import Account from './components/account/account'
import BookingPage from './components/bookingpage/bookingpage'

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  return (
    <>
      {!isLoginPage && <Header  isLoggedIn={isLoggedIn}/>}
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn} />}/>
          <Route path="/account" element={<Account setisLoggedIn={setisLoggedIn} />}/>
          <Route path="/booking/:name" element={<BookingPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App