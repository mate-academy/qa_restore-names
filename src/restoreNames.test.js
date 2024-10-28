/* eslint quotes: ["off"] */
"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should be declared", () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`should restore firstname
     if user has undefined value in firstname`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe("Jack");
  });

  it("should restore firstname if user has no firstname", () => {
    const users = [
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe("Mike");
  });

  it("should not modify anything if user has a correct firstname", () => {
    const users = [
      {
        firstName: "Mike",
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe("Mike");
  });
});
