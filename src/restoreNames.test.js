/* eslint-disable object-curly-newline */
'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('restores firstName when missing or falsy', () => {
    const users = [
      { fullName: 'Vladyslav Tkachuk' },
      { fullName: 'Bob Smith', firstName: 'Bob' },
      { fullName: 'Alice Johnson', firstName: undefined },
      { fullName: 'Nick Blue', firstName: null },
      { fullName: 'Joe Brown', firstName: '' },
    ];

    restoreNames(users);

    expect(users).toEqual([
      { fullName: 'Vladyslav Tkachuk', firstName: 'Vladyslav' },
      { fullName: 'Bob Smith', firstName: 'Bob' },
      { fullName: 'Alice Johnson', firstName: 'Alice' },
      { fullName: 'Nick Blue', firstName: 'Nick' },
      { fullName: 'Joe Brown', firstName: 'Joe' },
    ]);
  });

  it('does nothing for empty array', () => {
    const users = [];

    restoreNames(users);
    expect(users).toEqual([]);
  });

  it('uses fullName as firstName if no spaces', () => {
    const users = [{ fullName: 'Vlad' }, { fullName: 'Maryna' }];

    restoreNames(users);

    expect(users).toEqual([
      { fullName: 'Vlad', firstName: 'Vlad' },
      { fullName: 'Maryna', firstName: 'Maryna' },
    ]);
  });

  it('uses first word as firstName if fullName has spaces', () => {
    const users = [{ fullName: 'Vlad Tkachuk Ilyich' }];

    restoreNames(users);

    expect(users).toEqual([
      { fullName: 'Vlad Tkachuk Ilyich', firstName: 'Vlad' },
    ]);
  });
});
