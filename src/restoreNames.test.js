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
    {
      lastName: "Black",
      fullName: "Jack Black",
    },
  ];

  it("should be an instance of function", () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it("shouldn`t return anything", () => {
    expect(restoreNames([])).toBeUndefined();
  });

  it("should correctly modify an array", () => {
    restoreNames(users);
    const expectedResult = [
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
      {
        firstName: "Jack",
        lastName: "Black",
        fullName: "Jack Black",
      },
    ];

    expect(users).toEqual(expectedResult);
  });

  it("set firstName if user doesnt have it", () => {
    restoreNames(users);
    const expectedResult = [
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
      {
        firstName: "Jack",
        lastName: "Black",
        fullName: "Jack Black",
      },
    ];

    expect(users).toEqual(expectedResult);
  });
});
