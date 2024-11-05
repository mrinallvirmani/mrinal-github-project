// src/pages/RepoList.jsx

import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const RepoList = () => {
  const { repos } = useOutletContext();

  return (
    <div className="container">
      <h2>GoDaddy Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
