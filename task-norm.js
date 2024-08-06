'use strict';

const currentYear = 2024;
const sidesQuantity = 4;
//normal 1
const userName = prompt(`Ваше ім'я?`);
alert(`Привіт, ${userName}`);

//normal 2
const userYearOfBirth = prompt(`Ваш рік народження:`);
alert(`Виходить Вам аж ${currentYear - userYearOfBirth}!`);

//normal 3
const length = prompt(`Що ж, я допоможу тоді Вам знайти периметр квадрату! Підкажіть довжину однієї сторони?`);
alert(`Периметр цього квадрату ${sidesQuantity * length}`);