import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders DevOps Demo Application title', () => {
  render(<App />);
  const titleElement = screen.getByText(/DevOps Demo Application/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders counter with initial value 0', () => {
  render(<App />);
  const counterElement = screen.getByText('0');
  expect(counterElement).toBeInTheDocument();
});

test('counter increments when + button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText('+');
  const counter = screen.getByText('0');
  
  fireEvent.click(incrementButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('counter decrements when - button is clicked', () => {
  render(<App />);
  const decrementButton = screen.getByText('-');
  const incrementButton = screen.getByText('+');
  
  // First increment to 1, then decrement to 0
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('renders tech stack badges', () => {
  render(<App />);
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
  expect(screen.getByText('GitHub Pages')).toBeInTheDocument();
  expect(screen.getByText('CI/CD')).toBeInTheDocument();
});