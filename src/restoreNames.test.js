"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

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

  it(`should be declared`, () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it("should not return anything", () => {
    expect(restoreNames(users)).toBeUndefined();
  });

  it("should set correct firstName", () => {
    restoreNames(users);

    expect(users[0].firstName).toBe("Jack");
  });
});
