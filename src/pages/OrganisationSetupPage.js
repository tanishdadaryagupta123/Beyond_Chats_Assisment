// src/pages/OrganisationSetupPage.js
import React, { useState } from 'react';
import './styles/OrganisationSetupPage.css';

const OrganisationSetupPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  // eslint-disable-next-line
  const [detectedPages, setDetectedPages] = useState([
    { name: 'Homepage', status: 'Scraped', data: 'Data chunk 1, Data chunk 2' },
    { name: 'About Us', status: 'Pending', data: '' },
    { name: 'Contact Us', status: 'Scraped', data: 'Data chunk 3, Data chunk 4' },
  ]);

  const fetchMetaDescription = (url) => {
    // Dummy function to fetch meta description
    setMetaDescription('This is a dummy meta description.');
  };

  const handleClickPage = (page) => {
    alert(`Scraped data for ${page.name}: ${page.data}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
  };

  return (
    <div className="organisation-container">
      <h1>Setup Organisation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={companyUrl}
          onChange={(e) => setCompanyUrl(e.target.value)}
          onBlur={(e) => fetchMetaDescription(e.target.value)}
          required
        />
        <textarea
          placeholder="Company Description"
          value={companyDescription || metaDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          readOnly={metaDescription !== ''}
        />
        <button type="submit">Next</button>
      </form>

      <div className="webpages-section">
        <h2>Detected Webpages</h2>
        <ul>
          {detectedPages.map((page, index) => (
            <li
              key={index}
              className={`page-item ${page.status.toLowerCase()}`}
              onClick={() => handleClickPage(page)}
            >
              <span className="page-name">{page.name}</span>
              <span className={`status ${page.status.toLowerCase()}`}>
                {page.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrganisationSetupPage;
