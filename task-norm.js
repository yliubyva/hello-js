'use strict';

const currentYear = 2024;
const sidesQuantity = 4;
let userName;
let userYearOfBirth;
let length;

//normal 1
userName = prompt(`Ваше ім'я?`);
alert(`Привіт, ${userName}`);

//normal 2
userYearOfBirth = prompt(`Ваш рік народження:`);
alert(`Виходить Вам аж ${currentYear - userYearOfBirth}!`);

//normal 3
length = prompt(`Що ж, я допоможу тоді Вам знайти периметр квадрату! Підкажіть довжину однієї сторони?`);
alert(`Периметр цього квадрату ${sidesQuantity * length}`);