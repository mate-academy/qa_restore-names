"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should add 'firstName' if 'firstName' === undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ]);
  });

  it(`should add 'firstName' if 'firstName' isn't`, () => {
    const users = [
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Mike",
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ]);
  });
});
