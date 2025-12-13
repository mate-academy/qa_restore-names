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
      const parts = user.fullName.trim().split(/\s+/);
      const [first, last] = parts;

      if ((!user.firstName || user.firstName.trim() === '') && first) {
        user.firstName = first;
      }

      if ((!user.lastName || user.lastName.trim() === '') && last) {
        user.lastName = last;
      }
    }

    // Create fullName if it's missing or empty
    if (!user.fullName || user.fullName.trim() === '') {
      const firstName = user.firstName
      && user.firstName.trim ? user.firstName.trim() : '';
      const lastName = user.lastName
      && user.lastName.trim ? user.lastName.trim() : '';

      if (firstName && lastName) {
        user.fullName = `${firstName} ${lastName}`;
      } else if (firstName) {
        user.fullName = firstName;
      } else if (lastName) {
        user.fullName = lastName;
      } else {
        user.fullName = '';
      }
    }
  }

  return users;
}

module.exports = { restoreNames };
