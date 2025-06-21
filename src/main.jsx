import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import End from './End.jsx'
import Hope from './Hope.jsx'
import Hope2 from './Hope2.jsx'
import Finish from './Finish.jsx'
import Contact from './Contact.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <BrowserRouter> 
    <Routes>
      <Route path='/' element= {<App/>} />
      <Route path='/Shop' element={<Hope2/>}/>
      <Route path='/About Us' element={<Finish/>}/>
      <Route path='/Contact Us' element={<Contact/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes> 
    </BrowserRouter>
    <End/>
  </StrictMode>,
)
