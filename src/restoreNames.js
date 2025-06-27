'use strict';

/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} fullName
 *
 * @param {User[]} users
 */
function restoreNames(users) {
  for (const user of users) {
    if (user.firstName === undefined
      || user.firstName === null || user.firstName === '') {
      user.firstName = user.fullName.split(' ')[0];
    }
  }
}

module.exports = { restoreNames };
