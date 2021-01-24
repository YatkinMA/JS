'use strict';
// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 (c = 1 + a) = 2 префиксная форма
// d = b++; alert(d);           // 1 (d = b + 1) = 2 постфиксная форма - сначала возвращает значение потом проводит инкремирование
// c = (2+ ++a); alert(c);      // 5 2 + (1 + 1(из первого примера) + 1(из второго примера))
// d = (2+ b++); alert(d);      // 4 2 + (1 + 1(из первого примера) + 1(из второго примера - постфиксная форма))
// alert(a);                    // 3 1(было) + 1(из первого примера) + 1(из третьего примера)
// alert(b);                    // 3 1(было) + 1(из второго примера) + 1(из четвертого примера)


// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
// x = 5 т.к. (a *= 2) = a * a = 4

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a = 8,
  b = -4;
if (a > 0 & b > 0) {
  alert(a - b);
} else if (a < 0 & b < 0) {
  alert(a * b);
} else if ((a > 0 & b < 0) || (a < 0 & b > 0)) {
  alert(a + b);
}

//
// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

let a = 1;
switch (a) {
  case 0:
    console.log(0);
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  case 3:
    console.log(3);
  case 4:
    console.log(4);
  case 5:
    console.log(5);
  case 6:
    console.log(6);
  case 7:
    console.log(7);
  case 8:
    console.log(8);
  case 9:
    console.log(9);
  case 10:
    console.log(10);
  case 11:
    console.log(11);
  case 12:
    console.log(12);
  case 13:
    console.log(13);
  case 14:
    console.log(14);
  default:
    console.log(15);
}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function toAddition(num1, num2) {
  return num1 + num2;
}

function toSubtraction(num1, num2) {
  return num1 - num2;
}

function toMultiplication(num1, num2) {
  return num1 * num2;
}

function toDivision(num1, num2) {
  return num1 / num2;
}


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических
// операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'сложить':
      return toAddition(arg1, arg2);
    case 'вычесть':
      return toSubtraction(arg1, arg2);
    case 'умножить':
      return toMultiplication(arg1, arg2);
    case 'разделить':
      return toDivision(arg1, arg2);
    default:
      console.log(`Неизвестная операция ${operation}`)
  }
}


// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// null == 0 //   false
// null === 0 //  false
// typeof null // object
// null является определенным значением отсутствия объекта, а 0 - объект, имеющий опреденное значение


// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.


function power(val, pow) {
  switch (pow) {
    case 0:
      return 1;
    case 1:
      return val;
    default:
      return val * power(val, pow - 1);
  }
}
