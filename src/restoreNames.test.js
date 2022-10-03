'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  const usersOk = [
    {
      firstName: 'Misha',
      lastName: 'Grynko',
      fullName: 'Misha Grynko',
    },
    {
      firstName: 'Yurii',
      lastName: 'Holiuk',
      fullName: 'Yurii Holiuk',
    },
    {
      firstName: 'Sergii',
      lastName: 'Nosachenko',
      fullName: 'Sergii Nosachenko',
    },
  ];

  const usersNotOk = [
    {
      firstName: undefined,
      lastName: 'Grynko',
      fullName: 'Misha Grynko',
    },
    {
      firstName: '',
      lastName: 'Holiuk',
      fullName: 'Yurii Holiuk',
    },
    {
      lastName: 'Nosachenko',
      fullName: 'Sergii Nosachenko',
    },
  ];

  it('is declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('returns nothing', () => {
    const usersToProceed = [...usersOk];

    expect(restoreNames(usersToProceed))
      .toBe(undefined);
  });

  it('doesn\'t change users if they are ok', () => {
    const usersToProceed = [...usersOk];

    restoreNames(usersToProceed);

    expect(usersToProceed)
      .toStrictEqual(usersOk);
  });

  it('changes users if they are not ok', () => {
    const usersToProceed = [...usersNotOk];

    restoreNames(usersToProceed);

    expect(usersToProceed)
      .toStrictEqual(usersOk);
  });
});
