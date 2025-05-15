"use strict";

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
  {
    firstName: "Mike",
    lastName: "Adams",
    fullName: "Mike Adams",
  },
];

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should add firstName if FirstName is undefined", () => {
    restoreNames(users);

    expect(users[0]).toEqual({
      firstName: "Jack",
      lastName: "Holy",
      fullName: "Jack Holy",
    });
  });

  it("should add name if object not includes firstName", () => {
    restoreNames(users);

    expect(users[1]).toEqual({
      firstName: "Mike",
      lastName: "Adams",
      fullName: "Mike Adams",
    });
  });

  it("should nothing to do if user have FirstName", () => {
    restoreNames(users);

    expect(users[2]).toEqual({
      firstName: "Mike",
      lastName: "Adams",
      fullName: "Mike Adams",
    });
  });

  // write tests here
});
