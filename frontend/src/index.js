import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Postlist from './components/PostList'
import JobListings from './components/joblisting.js'
import JobApplication from './components/jobapplication.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
      <Postlist />
      <JobApplication />
      <JobListings />
    </React.StrictMode>
  </Router>

)