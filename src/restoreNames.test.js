'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const names = [{ fullName: 'James Smith' }];

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should return "James" when full name is equal to "James Smith"', () => {
    restoreNames(names);

    expect(names[0].firstName)
      .toBe('James');
  });
});
