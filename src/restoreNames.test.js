"use strict";

const { restoreNames } = require("./restoreNames");

describe("restoreNames", () => {
  it("should be a function", () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it("should add firstName if undefined", () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    const expectedResult = [
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it("should add firstName if empty", () => {
    const users = [
      {
        firstName: "",
        lastName: "Bond",
        fullName: "James Bond",
      },
    ];

    const expectedResult = [
      {
        firstName: "James",
        lastName: "Bond",
        fullName: "James Bond",
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it("should add firstName if absent", () => {
    const users = [
      {
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    const expectedResult = [
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it("should add firstName to all users", () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    const expectedResult = [
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
    ];

    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });
});
