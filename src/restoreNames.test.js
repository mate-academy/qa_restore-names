'use strict';

// Import the function restoreNames
const restoreNames = require('./restoreNames');

describe('restoreNames', () => {
  it('should restore a single name correctly', () => {
    const input = 'John Doe';
    const expected = 'Doe, John';

    expect(restoreNames(input)).toBe(expected);
  });

  it('should restore multiple names correctly', () => {
    const input = [{ fullName: 'John Doe' }, { fullName: 'Jane Smith' }];
    const expected = ['Doe, John', 'Smith, Jane'];

    expect(restoreNames(input)).toEqual(expected);
  });

  it('should return an empty string for empty input', () => {
    const input = '';
    const expected = '';

    expect(restoreNames(input)).toBe(expected);
  });

  it('should handle undefined input gracefully', () => {
    const input = undefined;
    const expected = '';

    expect(restoreNames(input)).toBe(expected);
  });

  it('should handle names with middle names', () => {
    const input = 'John Michael Doe';
    const expected = 'Doe, John Michael';

    expect(restoreNames(input)).toBe(expected);
  });
});
