"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should return firstName if firstName - undefined", () => {
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

    restoreNames(users);

    expect(users[0].firstName).toBe("Jack");
  });

  it("should return `firstName` to users who do not have it", () => {
    const users = [
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    restoreNames(users);

    expect(users[1].firstName).toBe("Mike");
  });
});
