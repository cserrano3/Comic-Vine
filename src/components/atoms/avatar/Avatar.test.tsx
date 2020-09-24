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
});