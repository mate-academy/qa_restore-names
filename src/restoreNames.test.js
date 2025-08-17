'use strict';

describe('restoreNames', () => {
  const {
    restoreNames,
  } = require('./restoreNames.js');

  it('should return firstName when is undefined', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }];

    restoreNames(users);

    expect(users).toEqual([{
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }]);
  });

  it('should return firstName when is missing', () => {
    const users = [{
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(users);

    expect(users).toEqual([{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }]);
  });

  it('should not modify array when firstName is already present', () => {
    const users = [{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }];

    restoreNames(users);

    expect(users).toEqual([{
      firstName: 'Mike',
      lastName: 'Adams',
      fullName: 'Mike Adams',
    }]);
  });

  it('sholud handle empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it('should return firstNames with multiply users', () => {
    const users = [{
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
    ];

    restoreNames(users);

    expect(users).toEqual([
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
    ]);
  });
});
