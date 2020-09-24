import React from 'react'
import { render } from '@testing-library/react';
import Avatar from './Avatar';


describe('Avatar', () => {

  test.each`
  size        | variantClass
  ${'small'}  | ${'avatar--small'}
  ${'medium'} | ${'avatar--medium'}
  ${'large'}  | ${'avatar--large'}`
    ('should have a different dimension for each size variant',
      ({ size, variantClass }: any) => {

        const { container } = render(
          <Avatar
            imageURL={"fake.png"}
            alt={"fake test"}
            size={size} />);

        expect(container.firstChild).toHaveClass(variantClass)
      });

  it('should render with an an altText and a given url', () => {
    const { getByTestId } = render(
      <Avatar
        imageURL={"testpPicture.png"}
        alt={"This is an alt text"}
        size={"small"} />);

    expect(getByTestId('avatar').getAttribute('alt')).toEqual('This is an alt text');
    expect(getByTestId('avatar').getAttribute('src')).toEqual('testpPicture.png')

  })
});