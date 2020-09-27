import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';
import { Formik } from 'formik'

describe('Input', () => {
  it('should render with the right props', () => {
    render(
      <Formik
        initialValues={{
          name: ''
        }}
        onSubmit={jest.fn()}>
        <Input
          name="name"
          onChange={jest.fn()}
          placeholder="Enter your name"
          type="text" />
      </Formik>);

    expect(screen.getByPlaceholderText("Enter your name")).toBeVisible()
    expect(screen.getByPlaceholderText("Enter your name")).toHaveClass('input');
  });

  it('should enter any value', () => {
    render(
      <Formik
        initialValues={{
          name: ''
        }}
        onSubmit={jest.fn()}>
        <Input
          name="name"
          onChange={jest.fn()}
          placeholder="Enter your name"
          type="text" />
      </Formik>);

    userEvent.type(screen.getByPlaceholderText("Enter your name"), 'Hello, world!');

    expect(screen.getByPlaceholderText("Enter your name")).toHaveValue('Hello, world!');
  });

  it('should enter any value', () => {
    render(
      <Formik
        initialValues={{
          name: ''
        }}
        onSubmit={jest.fn()}>
        <Input
          name="name"
          onChange={jest.fn()}
          placeholder="Enter your name"
          type="text" />
      </Formik>);

    userEvent.type(screen.getByPlaceholderText("Enter your name"), 'Hello, world!');

    expect(screen.getByPlaceholderText("Enter your name")).toHaveValue('Hello, world!');
  });
});