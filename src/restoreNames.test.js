'use strict';

describe(`'restoreNames' function`, () => {
  const { restoreNames } = require('./restoreNames');
  let { users } = require('./resroreNameUsers');

  // Positive cases:
  
  it(`should restore a firstName value if it's 'undefined'`, () => {
    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
  });

  it(`should restore a firstName entry if it's not present`, () => {
    restoreNames(users);

    expect(users[1].firstName).toBe('Mike');
  });

  it(`should restore a firstName value if it's  ''`, () => {
    restoreNames(users);

    expect(users[2].firstName).toBe('David');
  });

  // Negative cases:
  it(`should set a firstName value to ''` + 
      `if fullName is ''`, () => {
    restoreNames(users);

    expect(users[3].firstName).toBe('');
  });

  // Throw errors cases:
  it(`should throw an error if fullName is missing`, () => {
    const errorUser = [{firstName: undefined, lastName: 'Bond', }];

    expect(() => {
      restoreNames(errorUser);
    }).toThrow();
  });

  it(`should throw an error if fullName 'undefined'`, () => {
    const errorUser = [{firstName: undefined, lastName: 'Bond', fullName: undefined}];

    expect(() => {
      restoreNames(errorUser);
    }).toThrow();
  });
});
