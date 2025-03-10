'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames'); // Імпортуємо функцію

  it('should restore first names from full names', () => {
    const users = [
      { fullName: 'John Doe' },
      { fullName: 'Jane Doe' },
    ];

    restoreNames(users); // Викликаємо функцію

    expect(users).toEqual([
      {
        firstName: 'John', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', fullName: 'Jane Doe',
      },
    ]);
  });

  it('should not change existing first names', () => {
    const users = [
      {
        firstName: 'John', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', fullName: 'Jane Doe',
      },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'John', fullName: 'John Doe',
      },
      {
        firstName: 'Jane', fullName: 'Jane Doe',
      },
    ]);
  });

  it('should restore first names from full names with multiple parts', () => {
    const users = [
      { fullName: 'Jack Holy' },
      { fullName: 'Mike Adams' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack', fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike', fullName: 'Mike Adams',
      },
    ]);
  });

  it('should handle cases, firstName is missing', () => {
    const users = [
      { fullName: 'Jack Holy' },
      { fullName: 'Mike Adams' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      {
        firstName: 'Jack', fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike', fullName: 'Mike Adams',
      },
    ]);
  });
});
