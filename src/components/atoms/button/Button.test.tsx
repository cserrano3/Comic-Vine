import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Button from './Button';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);
describe('Button', () => {
  it('should render with all required props', () => {
    const { getByRole } = render(
      <Button
        label="test button"
        onClick={jest.fn()}
      />
    )

    expect(getByRole('button')).toHaveTextContent("test button");
  });


  it('should render with all optional props', () => {
    const { getByRole } = render(
      <Button
        label="hello"
        onClick={jest.fn()}
        disabled={false}
        type="submit"
        className="some-class"
      />
    );

    expect(getByRole('button')).toHaveTextContent("hello");
    expect(getByRole('button')).not.toBeDisabled();
    expect(getByRole('button')).toHaveProperty('type', 'submit');
    expect(getByRole('button')).toHaveClass('button some-class');
  });

  it('should render a disabled button', () => {
    const { getByRole } = render(
      <Button
        label="test button"
        onClick={jest.fn()}
        disabled={true}
      />
    );

    expect(getByRole('button')).toBeDisabled();
  });
});