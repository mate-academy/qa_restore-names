module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    'max-len': ['error', { code: 120 }]
  },
  plugins: ['jest']
};
