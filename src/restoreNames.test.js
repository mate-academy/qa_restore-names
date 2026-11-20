'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const users1 = [
    {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    }
  ];

  const users2 = [
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ];

  it('should add firstName from fullName when firstName is missing', () => {
    restoreNames(users1);

    expect(users1[0].firstName).toBe('Jack');
  });

  it('should add firstName from fullName when firstName is missing', () => {
    restoreNames(users2);

    expect(users2[0].firstName).toBe('Mike');
  });

});
