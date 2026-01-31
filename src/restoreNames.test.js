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

  it("should be a function", () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it("should have firstName", () => {
    restoreNames(users);
    expect(users[0].firstName).toBe("Jack");
  });

  it("should have firstName", () => {
    restoreNames(users);
    expect(users[1].firstName).toBe("Mike");
  });
});
