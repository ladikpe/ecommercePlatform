import { render, screen, fireEvent } from '@testing-library/react';
import Order from './cart';

test('renders order form and submits', () => {
  render(<Order />);

  // Check if the form elements are rendered
  const productInput = screen.getByLabelText(/Product ID/i);
  const quantityInput = screen.getByLabelText(/Quantity/i);
  const submitButton = screen.getByText(/Place Order/i);

  expect(productInput).toBeInTheDocument();
  expect(quantityInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Simulate typing in inputs
  fireEvent.change(productInput, { target: { value: 'product-123' } });
  fireEvent.change(quantityInput, { target: { value: 2 } });

  // Simulate form submission
  fireEvent.click(submitButton);

  expect(productInput.value).toBe('product-123');
  expect(quantityInput.value).toBe('2');
});

