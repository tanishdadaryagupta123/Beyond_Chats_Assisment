import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; // Import the Navbar component
import RegistrationPage from './pages/RegistrationPage';
import OrganisationSetupPage from './pages/OrganisationSetupPage';
import ChatbotIntegrationPage from './pages/ChatbotIntegrationPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Add Navbar to the app layout */}
      <div style={{ paddingTop: '80px' }}> {/* Account for navbar height */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/setup-organisation" element={<OrganisationSetupPage />} />
          <Route path="/chatbot-integration" element={<ChatbotIntegrationPage />} />
          <Route path="*" element={<HomePage />} /> {/* Add catch-all route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
