"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it(`should restore firstName if it is equal 'undefined'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
      {
        firstName: undefined,
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
      {
        firstName: "Mike",
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ]);
  });

  it("should not change firstName if it is already defined", () => {
    const users = [
      {
        firstName: "John",
        lastName: "Doe",
        fullName: "John Doe",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        fullName: "Jane Doe",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "John",
        lastName: "Doe",
        fullName: "John Doe",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        fullName: "Jane Doe",
      },
    ]);
  });

  it("should handle an empty array", () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  it("should handle a mix of defined and undefined firstNames", () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Brown",
        fullName: "Charlie Brown",
      },
      {
        firstName: "Lucy",
        lastName: "Van Pelt",
        fullName: "Lucy Van Pelt",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Charlie",
        lastName: "Brown",
        fullName: "Charlie Brown",
      },
      {
        firstName: "Lucy",
        lastName: "Van Pelt",
        fullName: "Lucy Van Pelt",
      },
    ]);
  });

  it("should handle a mix of non-exist and undefined firstNames", () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Brown",
        fullName: "Charlie Brown",
      },
      {
        lastName: "Van Pelt",
        fullName: "Lucy Van Pelt",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Charlie",
        lastName: "Brown",
        fullName: "Charlie Brown",
      },
      {
        firstName: "Lucy",
        lastName: "Van Pelt",
        fullName: "Lucy Van Pelt",
      },
    ]);
  });
});
