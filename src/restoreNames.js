'use strict';

/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} fullName
 *
 * @param {User[]} userList
 */
function restoreNames(userList) {
  for (const user of userList) {
    if (!user.firstName) {
      [user.firstName] = user.fullName.split(' ');
    }
  }
}

module.exports = { restoreNames };
