import { render, screen, fireEvent } from '@testing-library/react';
import Login from './lxogin';

test('renders login form and submits', () => {
  render(<Login />);

  // Check if the form elements are rendered
  const emailInput = screen.getByLabelText(/Email/i);
  const passwordInput = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByText(/Login/i);

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Simulate typing in inputs
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Simulate form submission
  fireEvent.click(submitButton);

  expect(emailInput.value).toBe('test@example.com');
  expect(passwordInput.value).toBe('password123');
});

