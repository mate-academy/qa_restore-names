"use strict";

describe("restoreNames", () => {
  it("should ", () => {
    it("should ", () => {});
  });

  const users = [
    {
      firstName: undefined,
      lastName: "Smith",
      fullName: "John Smith",
    },
    {
      firstName: undefined,
      lastName: "Doe",
      fullName: "Jane Doe",
    },
  ];

  restoreNames(users);

  expect(users).toEqual([
    {
      firstName: "John",
      lastName: "Smith",
      fullName: "John Smith",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      fullName: "Jane Doe",
    },
  ]);
});

it("should not modify users with existing firstName", () => {
  const users = [
    {
      firstName: "Alice",
      lastName: "Brown",
      fullName: "Alice Brown",
    },
    {
      firstName: "Bob",
      lastName: "White",
      fullName: "Bob White",
    },
  ];

  restoreNames(users);

  expect(users).toEqual([
    {
      firstName: "Alice",
      lastName: "Brown",
      fullName: "Alice Brown",
    },
    {
      firstName: "Bob",
      lastName: "White",
      fullName: "Bob White",
    },
  ]);
});

it("should handle an empty array without errors", () => {
  const users = [];

  restoreNames(users);

  expect(users).toEqual([]);
});
