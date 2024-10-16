import { useState } from 'react'
import { BrowserRouter, Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css'
import Sidebar from './assets/components/Sidebar';
import RamenBowl from '/PageImages/Ramen-Bowl.png'
import RamenReel from '/PageImages/Page_Header.png'
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import ErrorPage from './assets/pages/ErrorPage';
import Thriller from '../public/PageImages/Paranoia.jpg'
import Scifi from '../public/PageImages/Digimon.jpg'
import Romance from '../public/PageImages/Darling.jpg'
import Familyfriendly from '../public/PageImages/Spy.jpg'
import Action from '../public/PageImages/Dragonball.jpg'
import Darling from './assets/pages/Darling';
import Digimon from './assets/pages/Digimon';
import DragonBallz from './assets/pages/DragonBallz';
import Paranoia from './assets/pages/Paranoia';
import Spy from './assets/pages/spyxfamily';




function App() {
const [count, setCount] = useState(0)
const location = useLocation();

  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px'}}>
          <img src={RamenBowl} alt="My Logo" className="ramen-bowl" style={{ width: '200px', height: 'auto' }} />
        </div>
        <div className='RamenReel' style={{ position: 'absolute', top: '0px', right: '50px', left: '50%', transform: 'translateX(-50%)' }}>
          <img src={RamenReel} alt="My Logo 2" className="ramen-reel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </header>
          {location.pathname !== '/login' && location.pathname !== '/darling' && location.pathname !== '/Paramoia' && location.pathname !== '/DragonBallz' && location.pathname !== '/spyxfamily' && location.pathname !== '/Digimon' && (
            <>
            <div style={{ position: 'relative', width: '100%', height: '563px', top: 200 }}>
              <img src={Romance} style={{ position: 'absolute', top: '10px', left: '300px', width: '100px' }}/>
              <img src={Scifi} style={{ position: 'absolute', top: '10px', right: '341px', width: '100px' }}/>
              <img src={Thriller} style={{ position: 'absolute', bottom: '10px', left: '300px', width: '100px' }}/>
              <img src={Familyfriendly} style={{ position: 'absolute', bottom: '10px', right: '341px', width: '100px' }}/>
              <img src={Action} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px' }}/>
            </div>
            </>
          )}
      <Sidebar />
      
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="darling" element={<Darling />} />
          <Route path='digimon' element={<Digimon />} />
          <Route path='dragonballz' element={<DragonBallz />} />
          <Route path='Paramoia' element={<Paranoia />} />
          <Route path='spyxfamily' element={<Spy />} />

        
          {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      
    </>
  )
}



export default App





import { Link } from 'react-router-dom';