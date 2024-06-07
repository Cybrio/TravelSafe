import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';

test('renders Register component', () => {
  render(<Register />);
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});

test('registers a user', async () => {
  render(<Register />);
  fireEvent.change(screen.getByPlaceholderText(/Username/i), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'testpassword' } });
  fireEvent.click(screen.getByText(/Register/i));

  // Mock fetch and test the alert message or response handling here
});