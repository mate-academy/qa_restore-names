"use strict";

describe("restoreNames", () => {
  const { restoreNames } = require("./restoreNames");

  it("should return empty array if dataset is empty", () => {
    const data = [];
    restoreNames(data);
    expect(data).toEqual([]);
  });

  it("should return empty array if data is incorrect", () => {
    const data = null;
    expect(() => restoreNames(data)).not.toThrow();
  });

  it("should update and modify the firstName field if fullName is correct", () => {
    const data = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    const result = [
      {
        firstName: "Jack",
        lastName: "Holy",
        fullName: "Jack Holy",
      },
    ];

    restoreNames(data);
    expect(data).toEqual(result);
  });

  it("should update and modify the firstName fields", () => {
    const data = [
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

    const result = [
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

    restoreNames(data);
    expect(data).toEqual(result);
  });
});
