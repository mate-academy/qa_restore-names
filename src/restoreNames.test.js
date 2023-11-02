'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  const names = [
    { fullName: 'James Smith' },
    {
      firstName: 'Rob',
      fullName: 'Robert Scott',
    },
    {
      firstName: undefined,
      fullName: 'Andre Robson',
    },
  ];

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should create properties 'fullName' if it is missing`, () => {
    restoreNames(names);

    expect(names[0].firstName)
      .toBe('James');
  });

  it('should not change the name if it exists', () => {
    restoreNames(names);

    expect(names[1].firstName)
      .toBe('Rob');
  });

  it(`should overwrite the name if it is 'undefined'`, () => {
    restoreNames(names);

    expect(names[2].firstName)
      .toBe('Andre');
  });
});
