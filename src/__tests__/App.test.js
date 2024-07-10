import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

// Mock the data module
jest.mock('../data', () => ({
  transactionsData: [
    { customerId: 1, name: "Rahul", transactions: [{ date: "2024-01-10", amount: 120 }, { date: "2024-02-15", amount: 75 }, { date: "2024-03-12", amount: 200 }] },
    { customerId: 2, name: "Rohan", transactions: [{ date: "2024-01-20", amount: 40 }, { date: "2024-02-25", amount: 150 }, { date: "2024-03-17", amount: 90 }] },
    { customerId: 3, name: "Riya", transactions: [{ date: "2024-01-30", amount: 60 }, { date: "2024-02-10", amount: 100 }, { date: "2024-03-22", amount: 110 }] }
  ],
}));

test('renders Customer Rewards Program header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Customer Rewards Program/i);
  expect(headerElement).toBeInTheDocument();
});

test('displays loading message initially', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
