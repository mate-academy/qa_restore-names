"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should be a function", () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it("function should not return anything", () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
  });

  it(`should change firstName from "undefined" to "Jack"`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].firstName).toEqual("Jack");
  });

  it(`should add firstName to users if fiels doesn't exist`, () => {
    const users = [
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].firstName).toEqual("Mike");
  });

  it(`should not change lastName or fullName`, () => {
    const users = [
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    expect(restoreNames(users)).toBeUndefined();
    expect(users[0].lastName).toEqual("Adams");
    expect(users[0].fullName).toEqual("Mike Adams");
  });

  it(`should mutate the same reference`, () => {
    const users = [
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];
    const ref = users;

    expect(restoreNames(users)).toBeUndefined();
    expect(users).toBe(ref);
  });
});
