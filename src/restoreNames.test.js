"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should be declared", () => {
    expect(restoreNames).toBeDefined();
  });

  it("should restore name if undefined was given", () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Greenfield",
        fullName: "John Greenfield",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "John",
        lastName: "Greenfield",
        fullName: "John Greenfield",
      },
    ]);
  });

  it("should restore name if it was empty string", () => {
    const users = [
      {
        firstName: "",
        lastName: "Malbrock",
        fullName: "Ivan Malbrock",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Ivan",
        lastName: "Malbrock",
        fullName: "Ivan Malbrock",
      },
    ]);
  });

  it("should fill names when some objects are given", () => {
    const users = [
      {
        firstName: "",
        lastName: "Malbrock",
        fullName: "Ivan Malbrock",
      },
      {
        firstName: "",
        lastName: "Muller",
        fullName: "Kristian Muller",
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: "Ivan",
        lastName: "Malbrock",
        fullName: "Ivan Malbrock",
      },
      {
        firstName: "Kristian",
        lastName: "Muller",
        fullName: "Kristian Muller",
      },
    ]);
  });
});
