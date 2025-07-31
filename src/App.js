// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LiveInterview from './pages/LiveInterview';
import ResumeCenter from './pages/ResumeCenter';
import Recruiters from './pages/Recruiters';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live-interview" element={<LiveInterview />} />
        <Route path="/resume-center" element={<ResumeCenter />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
