import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import RepoList from './pages/RepoList';
import RepoDetails from './pages/RepoDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<RepoList />} />
          <Route path="repo/:repoName" element={<RepoDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
