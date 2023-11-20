# QA Restore names

В базі даних користувачів стався збій. В декого зникли значення з поля
`firstName`, добре що у `user` вже є поле `fullName`, з якого ми можемо взяти
потрібні дані.

Напиши тести для функції `restoreNames`, яка приймає масив об'єктів `users` та
відновлює `firstName` в тих, в кого воно відсутнє або рівне `undefined`,
спираючись на поле `fullName`. Функція нічого не повертає.

Приклад:

```js
const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

restoreNames(users);

users === [
  {
    firstName: 'Jack',
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: 'Mike',
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];
```

---

- [Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md);
- Read more about [Jest expectations](https://jestjs.io/uk/docs/expect).
