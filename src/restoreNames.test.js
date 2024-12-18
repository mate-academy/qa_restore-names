'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('Should be instance of function', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('Should change undefined first name from full name', () => {
    const user = [
      {
        firstName: undefined,
        lastName: 'Mike',
        fullName: 'Vasilis Mike',
      },
    ];

    restoreNames(user);

    expect(user[0]).toEqual({
      firstName: 'Vasilis',
      lastName: 'Mike',
      fullName: 'Vasilis Mike',
    });
  });

  it('Should add missing first name', () => {
    const user = [
      {
        lastName: 'Allie',
        fullName: 'Maries Allie',
      },
    ];

    restoreNames(user);

    expect(user[0]).toEqual({
      firstName: 'Maries',
      lastName: 'Allie',
      fullName: 'Maries Allie',
    });
  });

  it("Shouldn't modify non-empty firstName", () => {
    const user = [
      {
        firstName: 'John',
        lastName: 'Souvlakies',
        fullName: 'John Souvlakies',
      },
    ];

    restoreNames(user);

    expect(user[0]).toEqual({
      firstName: 'John',
      lastName: 'Souvlakies',
      fullName: 'John Souvlakies',
    });
  });

  it('Correctly works with multiple users in array', () => {
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
      {
        firstName: null,
        lastName: 'Zcadani',
        fullName: 'Elleves Zcadani',
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
      {
        firstName: 'Elleves',
        lastName: 'Zcadani',
        fullName: 'Elleves Zcadani',
      },
    ]);
  });

  it("Shouldn't change an empty array", () => {
    const user = [];

    restoreNames(user);

    expect(user).toEqual([]);
  });
});
