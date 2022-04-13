'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should return the firstName from the Fullname if it is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr Zelenskyy',
      },
      {
        firstName: undefined,
        lastName: 'Arestovych',
        fullName: 'Oleksiy Arestovych',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Volodymyr',
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr Zelenskyy',
      },
      {
        firstName: 'Oleksiy',
        lastName: 'Arestovych',
        fullName: 'Oleksiy Arestovych',
      },
    ]);
  });

  it(`should return the firstName from the Fullname if it's not there`, () => {
    const users = [
      {
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr Zelenskyy',
      },
      {
        lastName: 'Arestovych',
        fullName: 'Oleksiy Arestovych',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Volodymyr',
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr Zelenskyy',
      },
      {
        firstName: 'Oleksiy',
        lastName: 'Arestovych',
        fullName: 'Oleksiy Arestovych',
      },
    ]);
  });

  it(`should be left unchanged if all fields are present`, () => {
    const users = [
      {
        firstName: 'Volodymyr',
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr Zelenskyy',
      },
      {
        firstName: 'Oleksiy',
        lastName: 'Arestovych',
        fullName: 'Oleksiy Arestovych',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Volodymyr',
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr Zelenskyy',
      },
      {
        firstName: 'Oleksiy',
        lastName: 'Arestovych',
        fullName: 'Oleksiy Arestovych',
      },
    ]);
  });

  it(`should return firstName from Fullname if it's not there 
  and contains a dash`, () => {
    const users = [
      {
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr-Arsenovich Zelenskyy',
      },
      {
        lastName: 'Arestovych',
        fullName: 'Oleksiy-Petrovych Arestovych',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Volodymyr-Arsenovich',
        lastName: 'Zelenskyy',
        fullName: 'Volodymyr-Arsenovich Zelenskyy',
      },
      {
        firstName: 'Oleksiy-Petrovych',
        lastName: 'Arestovych',
        fullName: 'Oleksiy-Petrovych Arestovych',
      },
    ]);
  });
});
