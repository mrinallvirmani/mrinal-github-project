// src/App.jsx

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/orgs/godaddy/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading repositories...</p>;

  return (
    <div>
      <h1>Mrinal's GitHub Repository Viewer</h1>
      <Outlet context={{ repos }} />
    </div>
  );
};

export default App;
