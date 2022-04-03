import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// test #1
test('renders a todo list', () => {
  render(<App />);
  // https://testing-library.com/docs/queries/byrole
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role
  const todoList = screen.getByRole('list');
  expect(todoList).toBeInTheDocument();
});

// test #2
test('renders a todo', () => {
  render(<App />);
  // https://testing-library.com/docs/queries/bytext
  const todo = screen.getByText('React Hooks in Depth');
  expect(todo).toBeInTheDocument();
});

// test #3
test('renders an input to add a todo', () => {
  render(<App />);
  // https://testing-library.com/docs/queries/byplaceholdertext
  const input = screen.getByPlaceholderText('Enter your task');  
  expect(input).toBeInTheDocument();
});

