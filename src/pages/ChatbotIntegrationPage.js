import React, { useState } from 'react';
import './styles/ChatbotIntegrationPage.css';

const ChatbotIntegrationPage = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState(null); // New state for integration status

  const handleTestChatbot = () => {
    alert('Testing chatbot... Opening a dummy chatbot in a new window!');
    window.open('https://dummychatbot.com', '_blank');

    // Simulate success or failure
    setIntegrationStatus(Math.random() > 0.5 ? 'success' : 'failure');
  };

  const handleIntegrateChatbot = () => {
    setShowInstructions(true);
  };

  const handleEmailInstructions = () => {
    setIsEmail(true);
    alert('Instructions will be mailed to the developer!');
    // You can use a mail API here to send the email
  };

  const renderSuccessUI = () => (
    <div className="success-ui">
      <p>Integration successful! 🎉</p>
      <button className="btn-success">Explore Admin Panel</button>
      <button className="btn-success">Start talking to your chatbot</button>
      <div className="social-share">
        <button className="btn-social">Share on Twitter</button>
        <button className="btn-social">Share on Facebook</button>
      </div>
    </div>
  );

  const renderFailureUI = () => (
    <div className="failure-ui">
      <p>Oops! We couldn't detect the integration.</p>
      <button className="btn-retry" onClick={() => setIntegrationStatus(null)}>
        Retry Integration
      </button>
      <button className="btn-contact-support">Contact Support</button>
    </div>
  );

  return (
    <div className="chatbot-container">
      <div className="top-bar">
        <span>Chatbot not working as intended? <a href="#feedback">Share Feedback</a></span>
      </div>
      
      <h1>Chatbot Integration & Testing</h1>
      <div className="buttons-section">
        <button className="btn-test-chatbot" onClick={handleTestChatbot}>
          Test Chatbot
        </button>

        <button className="btn-integrate-chatbot" onClick={handleIntegrateChatbot}>
          Integrate on Your Website
        </button>
      </div>

      {integrationStatus === 'success' && renderSuccessUI()}
      {integrationStatus === 'failure' && renderFailureUI()}

      {showInstructions && (
        <div className="integration-options">
          <div className="option">
            <h3>Option 1: Easy Instructions</h3>
            <p>Copy and paste the following code within the &lt;head&gt; section of your website:</p>
            <pre>
              {`<script src="https://dummychatbot.com/chatbot.js"></script>`}
            </pre>
            <p>Ensure it's placed before the closing &lt;/head&gt; tag.</p>
          </div>

          <div className="option">
            <h3>Option 2: Email Instructions to Developer</h3>
            <button onClick={handleEmailInstructions} className="btn-email-developer">
              Email Developer Instructions
            </button>
            {isEmail && <p>Instructions have been sent to your developer.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotIntegrationPage;
