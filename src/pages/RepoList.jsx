import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const RepoList = () => {
  const { repos } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 5;

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h2>GoDaddy Repositories</h2>
      <ul>
        {currentRepos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: Math.ceil(repos.length / reposPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
