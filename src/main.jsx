import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./assets/css/main.css"
import { BrowserRouter } from 'react-router-dom'
import Global from './Global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
    </BrowserRouter>
  </React.StrictMode>,
)
