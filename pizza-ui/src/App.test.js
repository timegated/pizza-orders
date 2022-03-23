import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lol pizza', () => {
  render(<App />);
  const linkElement = screen.getByText(/lol pizza/i);
  expect(linkElement).toBeInTheDocument();
});
