'use strict';

/**
 * @param {Array} users
 */
function restoreNames(users) {
  for (const user of users) {
    if (
      (user.firstName === undefined || user.firstName === null)
      && typeof user.fullName === 'string'
      && user.fullName.includes(' ')
    ) {
      user.firstName = user.fullName.split(' ')[0];
    }
  }
}

module.exports = restoreNames;
