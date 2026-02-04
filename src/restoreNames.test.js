/* eslint-disable quotes */
"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("restores firstName when it is missing or undefined", () => {
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

    expect(users).toStrictEqual([
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
  });

  it("users object no need to restore firstName field", () => {
    const users = [
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

    expect(users).toStrictEqual([
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
  });

  it("empty users array", () => {
    const users = [];

    restoreNames(users);

    expect(users).toStrictEqual([]);
  });

  it("users have mix of failed & normal user objects", () => {
    const users = [
      {
        firstName: "Mike",
        lastName: "Adams",
        fullName: "Mike Adams",
      },
      {
        firstName: "Alex",
        lastName: "Brosky",
        fullName: "Alex Brosky",
      },

      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
      {
        firstName: "Mike",
        lastName: "Clerevald",
        fullName: "Mike Clerevald",
      },
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    restoreNames(users);

    expect(users).toStrictEqual([
      {
        firstName: "Mike",
        lastName: "Adams",
        fullName: "Mike Adams",
      },
      {
        firstName: "Alex",
        lastName: "Brosky",
        fullName: "Alex Brosky",
      },

      {
        firstName: "Mike",
        lastName: "Adams",
        fullName: "Mike Adams",
      },
      {
        firstName: "Mike",
        lastName: "Clerevald",
        fullName: "Mike Clerevald",
      },
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ]);
  });
});
