import { useState } from 'react'
import { BrowserRouter, Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Sidebar from './assets/components/Sidebar';
import RamenBowl from '/PageImages/Ramen-Bowl.png'
import RamenReel from '/PageImages/Page_Header.png'
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import ErrorPage from './assets/pages/ErrorPage';




function App() {
const [count, setCount] = useState(0)

  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px'}}>
          <img src={RamenBowl} alt="My Logo" style={{ width: '200px', height: 'auto' }} />
        </div>
        <div className='RamenReel' style={{ position: 'absolute', top: '0px', right: '50px', left: '50%', transform: 'translateX(-50%)' }}>
          <img src={RamenReel} alt="My Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </header>
     
     
      <Sidebar />
      
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          

        
          <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  )
}




export default App




