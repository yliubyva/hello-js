'use strict';
//Max 1
const pi = Math.PI;
let r; //радіус
let S; //площа

r = prompt(`Введіть радіус кола`);
S = pi * r ** 2;
alert(`Площа круга: ${S.toFixed(2)}`);

//Max 2
let v; //швидкість
let d; //відстань
let t; //час 

d = prompt(`Яка відстань в кілометрах між двома містами?`);
t = prompt(`За скільки годин Ви хочете дістатись?`);
v = d / t;
alert(`Щоб встигнути вчасно, Вам необхідно рухатись зі швидкістью ${v.toFixed(2)} км/год`);

//Max 3
const EUR = 0.92;

let userManyU = prompt(`Введіть необхідну суму USD, яку ви хочете обміняти:`);
let userManyE = userManyU * EUR;
alert(`Ваша сума до отримання: ${userManyE.toFixed(2)} EUR`);