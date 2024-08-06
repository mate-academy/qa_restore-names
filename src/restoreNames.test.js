"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should restore names", () => {
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
        firstName: undefined,
        lastName: 'Iyk',
        fullName: 'Brandon Iyk',
      },
      {
        firstName: undefined,
        lastName: 'Azimov',
        fullName: 'Aizek Azimov',
      },
    ];
    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
    expect(users[2].firstName).toBe('Brandon');
    expect(users[3].firstName).toBe('Aizek');
  });

  it("shouldn't return nothing", () => {
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
        firstName: undefined,
        lastName: 'Iyk',
        fullName: 'Brandon Iyk',
      },
    ];

    expect(restoreNames(users)).toBe(undefined);
  });

  it("should do nothing if nothing to restore", () => {
    const users = [
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
        firstName: 'Brandon',
        lastName: 'Iyk',
        fullName: 'Brandon Iyk',
      },
    ];

    restoreNames(users);

    expect(users).toBe(users);
  });
});
