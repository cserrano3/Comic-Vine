import { formatDate } from './date';

describe('formatDate', () => {
  it('should parse a date in a dd/MM/yyyy format', () => {
    const dateToBeFormatted = 'Feb 19, 1972';

    const formattedDate = formatDate(dateToBeFormatted);

    expect(formattedDate).toEqual('19/02/1972');
  });
});
