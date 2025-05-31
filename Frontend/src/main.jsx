import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IndexP } from './LandingPage/IndexP'
import { Navbar } from './ComponentsHF/Nav'
import { Foot } from './ComponentsHF/Footer'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Foot/>
  </>
)

// Arreglando error de subida de archivos al github