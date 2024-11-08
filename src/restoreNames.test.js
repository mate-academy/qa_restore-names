'use strict';

const { restoreNames } = require('./restoreNames');
const usersValue = [1, 2, 3]; // value for negative cases

describe('In positive cases restoreNames', () => {
  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should set name if name in 'user' is not a string`, () => {
    const usersExample = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 123,
        lastName: 'Klark',
        fullName: 'Bony Klark',
      },
      {
        firstName: NaN,
        lastName: 'Tomson',
        fullName: 'Monika Tomson',
      },
      {
        firstName: Infinity,
        lastName: 'Ford',
        fullName: 'Diana Ford',
      },
      {
        firstName: {},
        lastName: 'Bond',
        fullName: 'James Bond',
      },
      {
        firstName: [],
        lastName: 'Zidan',
        fullName: 'Viktor Zidan',
      },
      {
        firstName: function albatros() { },
        lastName: 'Bartez',
        fullName: 'Zara Bartez',
      },
    ];

    restoreNames(usersExample);

    expect(usersExample).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Bony',
        lastName: 'Klark',
        fullName: 'Bony Klark',
      },
      {
        firstName: 'Monika',
        lastName: 'Tomson',
        fullName: 'Monika Tomson',
      },
      {
        firstName: 'Diana',
        lastName: 'Ford',
        fullName: 'Diana Ford',
      },
      {
        firstName: 'James',
        lastName: 'Bond',
        fullName: 'James Bond',
      },
      {
        firstName: 'Viktor',
        lastName: 'Zidan',
        fullName: 'Viktor Zidan',
      },
      {
        firstName: 'Zara',
        lastName: 'Bartez',
        fullName: 'Zara Bartez',
      },
    ]);
  });

  it(`should set name if 'user' is not have a name`, () => {
    const usersExample = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
      {
        firstName: '',
        lastName: 'Brera',
        fullName: 'Sara Brera',
      },
    ];

    restoreNames(usersExample);

    expect(usersExample).toEqual([
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
        firstName: 'Mike',
      },
      {
        firstName: 'Sara',
        lastName: 'Brera',
        fullName: 'Sara Brera',
      },
    ]);
  });

  it(`should set new name if old name does not match 'fullName'`, () => {
    const usersExample = [
      {
        firstName: 'Tomat',
        lastName: 'Kenedy',
        fullName: 'Kendy Kenedy',
      },
    ];

    restoreNames(usersExample);

    expect(usersExample).toEqual([
      {
        firstName: 'Kendy',
        lastName: 'Kenedy',
        fullName: 'Kendy Kenedy',
      },
    ]);
  });

  it(`should set 'name' and restore 'fullName'`
    + `if 'lastName' !== 'fullName'`, () => {
    const usersExample = [
      {
        firstName: {},
        lastName: 'Boford',
        fullName: 'Damian',
      },
    ];

    restoreNames(usersExample);

    expect(usersExample).toEqual([
      {
        firstName: 'Damian',
        lastName: 'Boford',
        fullName: 'Damian Boford',
      },
    ]);
  });

  it(`should set 'name' to 'Unidentified' if 'fullName' === 'lastName'`, () => {
    const usersExample = [
      {
        firstName: function albatros() { },
        lastName: 'Torretto',
        fullName: 'Torretto',
      },
    ];

    restoreNames(usersExample);

    expect(usersExample).toEqual([
      {
        firstName: 'Unidentified',
        lastName: 'Torretto',
        fullName: 'Torretto',
      },
    ]);
  });

  it(`should set 'name' to 'Unidentified'`
    + `if 'user' is not have a 'fullName'`, () => {
    const usersExample = [
      {
        firstName: {},
        lastName: 'Andreas',
      },
    ];

    restoreNames(usersExample);

    expect(usersExample).toEqual([
      {
        firstName: 'Unidentified',
        lastName: 'Andreas',
      },
    ]);
  });

  it(`should set 'name' to 'Unidentified'`
    + `if 'fullName' is not a string`, () => {
    const usersExample = [
      {
        firstName: 123,
        lastName: 'Bartez',
        fullName: 123,
      },
    ];

    restoreNames(usersExample);

    expect(usersExample).toEqual([
      {
        firstName: 'Unidentified',
        lastName: 'Bartez',
        fullName: 123,
      },
    ]);
  });
});

describe('In Negative cases restoreNames', () => {
  it(`should return an error, if 'users' is not an array`, () => {
    const result = restoreNames(usersValue);

    if (!Array.isArray(usersValue)) {
      expect(result).toBe(`'users' must be an array`);
    }
  });

  it(`should return an error, if 'users' is empty array`, () => {
    const result = restoreNames(usersValue);

    if (Array.isArray(usersValue) && usersValue.length === 0) {
      expect(result).toBe(`'users' must not be empty`);
    }
  });

  it(`should return an error, if element in 'users' is not an object`, () => {
    const result = restoreNames(usersValue);
    const isAllObjeckt = usersValue.every((elem) => {
      return typeof elem === 'object' && !Array.isArray(elem) && elem !== null;
    });

    if (isAllObjeckt === false) {
      expect(result).toBe(`All elements in 'users' must be an Object`);
    }
  });
});
