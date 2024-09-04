import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Postlist from './components/PostList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <React.StrictMode>
         <App />
         <Postlist/>
     </React.StrictMode>
  </Router>

)