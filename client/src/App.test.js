import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';



test('App renders properly', () => {
  render(<App />);
})

test("Header is found", () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup/i)
})

test("Button is functional", () => {
  const { getByText } = render(<App />)
  fireEvent.click(getByText("Search"))
})

test("Player exists in app", () => {
  const { findByText } = render(<App />)
  findByText(/alex morgan/i)
})