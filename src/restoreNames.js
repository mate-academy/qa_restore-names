'use strict';

function restoreNames(names) {
  if (!names || (Array.isArray(names) && names.length === 0)) {
    return '';
  }

  if (typeof names === 'string') {
    const parts = names.split(' ');
    const lastName = parts.pop();

    return `${lastName}, ${parts.join(' ')}`;
  }

  if (Array.isArray(names)) {
    return names.map(name => {
      if (name && typeof name.fullName === 'string') {
        return restoreNames(name.fullName);
      }

      return '';
    });
  }

  return '';
}

module.exports = restoreNames;
