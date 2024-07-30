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
    if (!user.firstName && user.fullName) {
      const parts = user.fullName.split(' ');

      user.firstName = parts.shift(); // Витягуємо перше слово
      user.lastName = parts.join(' '); // Об'єднуємо решту слів
    }
  }
}

module.exports = { restoreNames };
