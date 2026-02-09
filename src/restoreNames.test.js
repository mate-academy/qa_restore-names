'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should throw error if users is not an array', () => {
    const users = 'Bob Mike Henry';

    expect(() => {
      restoreNames(users);
    }).toThrow();
  });

  it('should successfully restore firstNames when data is corrupted', () => {
    const corruptedData = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const correctData = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(corruptedData);

    expect(corruptedData).toEqual(correctData);
  });

  it('should don`t affect correct data', () => {
    const correctUsers = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    const copyOfCorrectUsers = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(correctUsers);

    expect(correctUsers).toEqual(copyOfCorrectUsers);
  });
});
