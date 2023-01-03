'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('add firstName field if it doesn\'t exist', () => {
    const testData = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(testData);

    expect(testData[0].firstName)
      .toBe('Mike');
  });

  it('add firstName if it\'s value isundefined', () => {
    const testData = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(testData);

    expect(testData[0].firstName)
      .toBe('Jack');
  });

  it('change nothing if firstName is exist', () => {
    const testData = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(testData);

    expect(testData[0].firstName)
      .toBe('Jack');
  });
});
