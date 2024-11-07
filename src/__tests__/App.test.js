import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

test('renders loading and repo list', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Loading repositories.../i)).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText(/GoDaddy Repositories/i)).toBeInTheDocument());
});
