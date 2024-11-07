import { render, screen } from '@testing-library/react';
import RepoDetails from '../pages/RepoDetails';
import React from 'react'; 
import { MemoryRouter } from 'react-router-dom';

test('displays repo details', () => {
  const mockRepo = {
    name: 'example-repo',
    description: 'An example repo',
    language: 'JavaScript',
    forks_count: 2,
    open_issues_count: 1,
    watchers_count: 5,
    html_url: 'https://github.com/example-repo',
  };
  
  render(
    <MemoryRouter>
      <RepoDetails repoDetails={mockRepo} />
    </MemoryRouter>
  );

  expect(screen.getByText(/example-repo/i)).toBeInTheDocument();
  expect(screen.getByText(/An example repo/i)).toBeInTheDocument();
});
