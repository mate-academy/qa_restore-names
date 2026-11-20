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

  const users1 = [
    {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
  ];

  const users2 = [
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ];

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  })

  it('the function returns nothing', () => {
    expect(restoreNames(users)).toBeUndefined();
  });

  it('should add firstName from fullName when firstName is missing', () => {
    restoreNames(users1);

    expect(users1[0].firstName).toBe('Jack');
  });

  it('should add firstName from fullName when firstName is missing', () => {
    restoreNames(users2);

    expect(users2[0].firstName).toBe('Mike');
  });
});
