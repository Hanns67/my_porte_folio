import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import MyPorteFolio from './App.jsx'
import { AccrocheSection, MyPerson } from './home/Home.jsx'




createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <MyPorteFolio></MyPorteFolio>
  </StrictMode>,
)
