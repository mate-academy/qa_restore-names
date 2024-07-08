"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require('./restoreNames');

  it("should ", () => {});

  test("restores firstName for users with undefined firstName", () => {
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

  test("does not change users who already have a firstName", () => {
    const users = [
      {
        firstName: "Jane",
        lastName: "Doe",
        fullName: "Jane Doe",
      },
      {
        firstName: "John",
        lastName: "Smith",
        fullName: "John Smith",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Jane",
        lastName: "Doe",
        fullName: "Jane Doe",
      },
      {
        firstName: "John",
        lastName: "Smith",
        fullName: "John Smith",
      },
    ]);
  });

  test("restores firstName for users with null firstName", () => {
    const users = [
      {
        firstName: null,
        lastName: "Brown",
        fullName: "Alice Brown",
      },
      {
        firstName: undefined,
        lastName: "White",
        fullName: "Bob White",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Alice",
        lastName: "Brown",
        fullName: "Alice Brown",
      },
      {
        firstName: "Bob",
        lastName: "White",
        fullName: "Bob White",
      },
    ]);
  });

  test("handles an empty array", () => {
    const users = [];

    restoreNames(users);

    expect(users).toEqual([]);
  });

  test("handles mixed users", () => {
    const users = [
      {
        firstName: "George",
        lastName: "Washington",
        fullName: "George Washington",
      },
      {
        firstName: undefined,
        lastName: "Lincoln",
        fullName: "Abraham Lincoln",
      },
      {
        firstName: "Theodore",
        lastName: "Roosevelt",
        fullName: "Theodore Roosevelt",
      },
      {
        firstName: null,
        lastName: "Wilson",
        fullName: "Woodrow Wilson",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "George",
        lastName: "Washington",
        fullName: "George Washington",
      },
      {
        firstName: "Abraham",
        lastName: "Lincoln",
        fullName: "Abraham Lincoln",
      },
      {
        firstName: "Theodore",
        lastName: "Roosevelt",
        fullName: "Theodore Roosevelt",
      },
      {
        firstName: "Woodrow",
        lastName: "Wilson",
        fullName: "Woodrow Wilson",
      },
    ]);
  });
});
