import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainContextProvider } from './context/MainContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>



    <MainContextProvider>
      <App />
    </MainContextProvider>

  </BrowserRouter>
)
