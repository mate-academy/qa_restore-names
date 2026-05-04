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
  for (const item of users) {
    if (!item.firstName) {
      [item.firstName] = item.fullName.split(' ');
    }
  }
}

module.exports = { restoreNames };
