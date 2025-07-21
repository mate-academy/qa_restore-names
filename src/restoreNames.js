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
    if (!user.firstName) {
      const objectPattern = {
        'firstName': user.fullName.split(' ')[0],
        'lastName': user.lastName,
        'fullName': user.fullName,
      };

      Object.assign(user, objectPattern);
    }
  }
}

module.exports = { restoreNames };
