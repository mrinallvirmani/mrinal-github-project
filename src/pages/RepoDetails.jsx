// src/pages/RepoDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/godaddy/${repoName}`)
      .then((response) => response.json())
      .then((data) => setRepoDetails(data))
      .catch((error) => console.error("Error fetching repo details:", error));
  }, [repoName]);

  if (!repoDetails) return <p>Loading repository details...</p>;

  return (
    <div className="container repo-details">
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description}</p>
      <p><strong>Language:</strong> {repoDetails.language}</p>
      <p><strong>Forks:</strong> {repoDetails.forks_count}</p>
      <p><strong>Open Issues:</strong> {repoDetails.open_issues_count}</p>
      <p><strong>Watchers:</strong> {repoDetails.watchers_count}</p>
      <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <div>
      <Link to="/" className="back-link">Back to repository list</Link>
      </div>
    </div>
  );
};

export default RepoDetails;
