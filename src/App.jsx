import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/godaddy/repos');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError('Failed to fetch repositories.');
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading repositories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Mrinal's GitHub Repository Viewer</h1>
      <Outlet context={{ repos }} />
    </div>
  );
};

export default App;
