'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should not return anything', () => {
    const users = [
      { firstName: '', lastName: 'Doe', fullName: 'John Doe' }
    ];
    const result = restoreNames(users);
    expect(result).toBeUndefined();
  });

  it('should restore the first name when it is missing', () => {
    const users = [
      { firstName: '', lastName: 'Doe', fullName: 'John Doe' }
    ];
    const finalResult = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' }
    ];

    restoreNames(users);

    expect(users).toEqual(finalResult);
  });

  it('should not change the first name when it is initially present', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' }
    ];
    const finalResult = [
      { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' }
    ];

    restoreNames(users);

    expect(users).toEqual(finalResult);
  });
});
