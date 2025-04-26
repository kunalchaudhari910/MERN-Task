import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
// import Navbar from '../components/Navbar'

createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <BrowserRouter>
        <SnackbarProvider>
          
          <App/>
        </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
    
  
)
