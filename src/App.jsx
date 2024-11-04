
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>Mrinal's GitHub Repository Viewer</h1>
      <Outlet />
    </div>
  );
};

export default App;
