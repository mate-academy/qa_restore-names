'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const users = [
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

  restoreNames(users)

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  test('should  set correct firstName if it is undefined', () => {
    expect(users[0].firstName).toEqual('Jack');
  });

  test('should  set correct firstName if it is unset', () => {
    expect(users[1].firstName).toEqual('Mike')
  });
});
