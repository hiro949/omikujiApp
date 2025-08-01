import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders title and button', () => {
  render(<App />);
  expect(screen.getByText(/おみくじ React版/i)).toBeInTheDocument();
  expect(screen.getByText(/占ってみる？/i)).toBeInTheDocument();
});

test('fetchFortune updates fortune text', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ fortune: '大吉！今日は最高の一日になるわよ！' }),
    })
  );

  render(<App />);
  fireEvent.click(screen.getByText(/占ってみる？/i));
  const result = await screen.findByText(/大吉！/i);
  expect(result).toBeInTheDocument();
});
