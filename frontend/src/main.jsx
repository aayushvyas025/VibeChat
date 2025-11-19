import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import { AuthContextProvider } from './context/index.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
    <Toaster />
  </BrowserRouter>
)
