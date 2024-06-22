import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom/dist/index.js'
import { Provider } from 'react-redux'
import { store } from '../State/Store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider store = {store}>
   <App />
   </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

