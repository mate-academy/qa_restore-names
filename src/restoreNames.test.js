'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should restore firstName when it is undefined', () => {
    const users = [
      {
        firstName: undefined, lastName: 'Holy', fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('should restore firstName when the field is missing', () => {
    const users = [
      {
        lastName: 'Adams', fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('should not change users who already have firstName', () => {
    const users = [
      {
        firstName: 'Anna', lastName: 'Smith', fullName: 'Anna Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Anna');
  });

  it('should not return anything', () => {
    const users = [
      {
        lastName: 'Brown', fullName: 'Sam Brown',
      },
    ];
    const result = restoreNames(users);

    expect(result).toBeUndefined();
  });
});
