'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should throw an error if params are invalid`, () => {
    expect(() => restoreNames(-5)).toThrow('Input must be array of objects');
    expect(() => restoreNames(null)).toThrow('Input must be array of objects');

    expect(() => restoreNames([null])).toThrow(
      'Input must be array of objects'
    );

    expect(() =>
      restoreNames([
        {
          firstName: undefined,
          lastName: 'Holy',
        },
      ])
    ).toThrow('FullName is required');
  });

  it(`should return an empty array if input is an empty array`, () => {
    expect(restoreNames([])).toEqual([]);
  });

  it(`should set correct firstName and lastName `, () => {
    expect(
      restoreNames([
        {
          firstName: undefined,
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
        {
          lastName: 'Adams',
          fullName: 'Mike Adams',
        },
      ])
    ).toEqual([
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

  it(`should handle fullName with only one word`, () => {
    const users = [{ fullName: 'Cher' }];

    expect(restoreNames(users)).toEqual([
      {
        firstName: 'Cher',
        lastName: '',
        fullName: 'Cher',
      },
    ]);
  });

  it(`should correctly split fullName with more than two words`, () => {
    const users = [{ fullName: 'John van Doe' }];

    expect(restoreNames(users)).toEqual([
      {
        firstName: 'John',
        lastName: 'van Doe',
        fullName: 'John van Doe',
      },
    ]);
  });
});
