import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './App.jsx'
import Background from './components/layout/Background.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative text-white overflow-hidden">
      <Background />
      <div className="relative z-10 w-full">
         <App />   
      </div>
    </div>

  </StrictMode>,
)
