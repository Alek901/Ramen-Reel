import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RamenBowl from '/PageImages/Ramen-Bowl.png'
import RamenReel from '/PageImages/Page_Header.png'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <img src={RamenBowl} alt="My Logo" style={{ width: '200px', height: 'auto' }} />
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '50px', left: '50%', transform: 'translateX(-50%)' }}>
        <img src={RamenReel} alt="My Logo" style={{ width: '120%', height: '100%', objectFit: 'cover' }} />
      </div>
    </>
  )
}
export default App