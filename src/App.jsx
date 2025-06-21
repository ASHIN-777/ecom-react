import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Body from './Body'
import Boss from './Boss'
import Hope from './Hope'
import Rose from './Rose'
import Rose2 from './Rose2'
import End from './End'
import Hope2 from'./Hope2'
import Finish from './Finish'
import Contact from './Contact'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body />
      <Boss />
      <Hope />
      <Rose/>
      <Rose2/>
      {/* <Hope2/> */}
      {/* <Finish/> */}
      {/* <Contact/> */}
      {/* <Login/> */}

    </>
  )
}

export default App
