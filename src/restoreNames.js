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
    // Restore firstName and/or lastName from fullName
    if (user.fullName && user.fullName.trim()) {
      const [first, last] = user.fullName.split(' ');

      if ((!user.firstName || user.firstName.trim() === '') && first) {
        user.firstName = first;
      }

      if ((!user.lastName || user.lastName.trim() === '') && last) {
        user.lastName = last;
      }
    }
  }

  return users;
}

module.exports = { restoreNames };
