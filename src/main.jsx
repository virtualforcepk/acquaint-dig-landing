import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// No StrictMode: the GSAP/Lenis effect manages its own lifecycle and a
// double-invoke in dev would double-register ScrollTriggers.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
