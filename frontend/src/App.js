import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from './components/Home/MainSection';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Job_Apply from './components/Jobs/jobapplication';
import Job_hiring from './components/Jobs/joblisting';
import CreatePost from './components/Posts/Create_post';
import Funding from './components/Funding';
import Profile from './components/Profile';
import Events from './components/Events';
import LegalData from "./components/Legaldata/Legal";
import FinancialData from "./components/Financialdata/Fin";
import Comapanyget from "./components/company/companyget";
import Companyadd from "./components/company/companyadd";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/job_apply" element={<Layout><Job_Apply /></Layout>} />
          <Route path="/job_hiring" element={<Layout><Job_hiring /></Layout>} />
          <Route path="/create_post" element={<Layout><CreatePost /></Layout>} />
          <Route path="/funding" element={<Layout><Funding /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/legaldata" element={<Layout><LegalData /></Layout>} />
          <Route path="/findata" element={<Layout><FinancialData /></Layout>} />
          <Route path="/companyget" element={<Layout><Comapanyget /></Layout>} />
          <Route path="/companyadd" element={<Layout><Companyadd /></Layout>} />

        </Route>
      </Routes>
    </Router>
  );
}

// Layout component to include Header, Sidebar, Footer
const Layout = ({ children }) => (
  <>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 250px' }} /> {/* Adjust width as needed */}
      <div style={{ flex: '1', padding: '16px' }}>{children}</div> {/* Flex for the main content */}
    </div>
  </>
);

export default App;
