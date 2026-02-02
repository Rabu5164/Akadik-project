
import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div>
     <Navbar/>

     <main className='min-h-screen'>
        <Outlet/>
     </main>

     <Footer/>
    
    </div>
  )
}

export default App

