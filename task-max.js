'use strict';
//Max 1
const pi = Math.PI;
const radius = prompt(`Введіть радіус кола`);
const area = pi * radius ** 2;
alert(`Площа круга: ${area.toFixed(2)}`);

//Max 2
const distance = prompt(`Яка відстань в кілометрах між двома містами?`);
const time = prompt(`За скільки годин Ви хочете дістатись?`);
const speed = distance / time;
alert(`Щоб встигнути вчасно, Вам необхідно рухатись зі швидкістью ${speed.toFixed(2)} км/год`);

//Max 3
const EUR = 0.92;

const moneyInUSD = Number(prompt(`Введіть необхідну суму USD, яку ви хочете обміняти:`));
const moneyInEUR = moneyInUSD * EUR;
alert(`Ваша сума до отримання: ${moneyInEUR.toFixed(2)} EUR`);