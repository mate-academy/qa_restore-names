"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should not return value", () => {
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
    const result = restoreNames(users);

    expect(result).toBe(undefined);
  });

  it("should be a function", () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it("firstName should be equal first part of fullName", () => {
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

    users.forEach((item, index) => {
      expect(item.firstName).toBe(item.fullName.split(" ")[0]);
    });
  });
});
