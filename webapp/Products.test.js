import { render, screen, waitFor } from '@testing-library/react';
import Products from './Productlist';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]),
  })
);

test('displays product list after fetch', async () => {
  render(<Products />);
  
  // Check if the heading is rendered
  expect(screen.getByText(/Products/i)).toBeInTheDocument();

  // Wait for the products to be fetched and rendered
  await waitFor(() => screen.getByTestId('product-list'));

  const products = screen.getAllByRole('listitem');
  expect(products).toHaveLength(2);
  expect(products[0]).toHaveTextContent('Product 1');
  expect(products[1]).toHaveTextContent('Product 2');
});

