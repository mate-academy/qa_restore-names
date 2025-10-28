"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("without or undefined firstName ", () => {
    let users = [
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
    expect(result).toBeUndefined();
    users.forEach((user) => {
      expect(isObject(user)).toBeTruthy();
    });

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

    users.forEach((user) => {
      expect(isObject(user)).toBeTruthy();
      expect(user).toHaveProperty("firstName");
      expect(user).toHaveProperty("lastName");
      expect(user).toHaveProperty("fullName");
    });
  });

  it("firstName is defined", () => {
    let users = [
      {
        firstName: "John",
        lastName: "Molly",
        fullName: "John Molly",
      },
      {
        firstName: "Phil",
        lastName: "Colins",
        fullName: "Phil Colins",
      },
    ];
    const result = restoreNames(users);
    expect(result).toBeUndefined();
    users.forEach((user) => {
      expect(isObject(user)).toBeTruthy();
    });

    

    expect(users).toEqual([
      {
        firstName: "John",
        lastName: "Molly",
        fullName: "John Molly",
      },
      {
        firstName: "Phil",
        lastName: "Colins",
        fullName: "Phil Colins",
      },
    ]);

    users.forEach((user) => {
      expect(isObject(user)).toBeTruthy();
      expect(user).toHaveProperty("firstName");
      expect(user).toHaveProperty("lastName");
      expect(user).toHaveProperty("fullName");
    });
  });
});

function isObject(value) {
  return value instanceof Object && value !== null && !Array.isArray(value);
}
