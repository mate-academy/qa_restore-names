# QA Restore
В базе данных пользователей произошел сбой, и у некоторых пользователей исчезли
значения поля `firstName`. Хорошо что в `user` уже есть поле `fullName`, из
которого мы можем взять нужные данные.

Напиши тесты для функции `restoreNames`, которая принимает массив `users` и
меняет поле `firstName` пользователям, у которых оно отсутствует или равно
`undefined`, опираясь на значение поля `fullName`. Функция ничего не возвращает.

Пример:
```
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

// users === [
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
- [Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)
- Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)
