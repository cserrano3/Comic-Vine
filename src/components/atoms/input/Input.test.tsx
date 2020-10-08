import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  it('should render with the right props', () => {
    render(
      <Input
        name="name"
        onChange={jest.fn()}
        placeholder="Enter your name"
        type="text" />);

    expect(screen.getByPlaceholderText("Enter your name")).toBeVisible()
    expect(screen.getByPlaceholderText("Enter your name")).toHaveClass('input');
  });

  it('should enter any value', () => {
    render(
      <Input
        name="name"
        onChange={jest.fn()}
        placeholder="Enter your name"
        type="text" />
    );

    userEvent.type(screen.getByPlaceholderText("Enter your name"), 'Hello, world!');

    expect(screen.getByPlaceholderText("Enter your name")).toHaveValue('Hello, world!');
  });

  it('should render an invalid input', () => {
    render(
      <Input
        invalid={true}
        name="name"
        onChange={jest.fn()}
        placeholder="Enter your name"
        type="text" />
    );

    expect(screen.getByPlaceholderText("Enter your name")).toHaveClass('input--invalid');
  });
});