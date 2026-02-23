"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("shouldn't return a value", () => {
    const result = restoreNames([
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

    expect(result).toBeUndefined();
  });

  it(`should restore 'firstName'`, () => {
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

    expect(users).toEqual([
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
      {
        lastName: "Adams",
        fullName: "Mike Adams",
        firstName: "Mike",
      },
    ]);
  });
});
