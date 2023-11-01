// src/components/GitHubReadme.js

import React, { useEffect, useState } from 'react';

const GitHubReadme = ({ repo }) => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}/readme`, {
      headers: {
        Accept: 'application/vnd.github.VERSION.html',
      },
    })
      .then(response => response.text())
      .then(data => setReadmeContent(data))
      .catch(error => console.error('Error fetching README:', error));
  }, [repo]);

  return (
    <div>
      <h2>GitHub README</h2>
      <a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
        View on GitHub
      </a>
      <div style={{ border: '2px solid #fff', padding: '20px', borderRadius: '8px' }} dangerouslySetInnerHTML={{ __html: readmeContent }} />
    </div>
  );
};

export default GitHubReadme;

