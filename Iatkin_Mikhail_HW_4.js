'use strict';

// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let numb = 569;

function convertNumberToObject() {
  if (numb > 999) {
    console.log(`Число ${numb} больше чем надо`);
    return {};
  } else if (numb <= 0) {
    return alert('Ноль или меньше, тоже не пойдёт');
  } else {
    let hundred = Math.floor(numb / 100);
    let ten = Math.floor(numb % 100 / 10);
    let unit = (numb % 10);
    const numbObject = {
      единицы: unit,
      десятки: ten,
      сотни: hundred,
    }
    return numbObject;
  }
}

convertNumberToObject(numb);


// 2. Продолжить работу с интернет-магазином:
// a.В прошлом домашнем задании вы реализовали корзину на базе массивов.
// Какими объектами можно заменить их элементы?
// b.Реализуйте такие объекты.
// c.Перенести функционал подсчета корзины на объектно-ориентированную базу.
const productOne = {
  name: 'Xiaomi MI 9 T',
  quantity: 1,
  price: 17000,
};

const productTwo = {
  name: 'Xiaomi MI 9',
  quantity: 2,
  price: 15000,
};

const basket = {
  items: [],

  addItem(item) {
    this.items.push(item);
  },

  getTotalSum() {
    let totalSum = 0;

    this.items.forEach(item => {
      totalSum += (item.price * item.quantity);
    });

    return totalSum;
  }
};

basket.addItem(productOne);
basket.addItem(productTwo);
console.log('Стоимость товаров в корзине ', basket.getTotalSum());

// 3. * Подумать над глобальными сущностями.
// К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины,
// но и для каталога.
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для
// различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

// Сущность Продукт имеет свойства: Название, цена, количество, фото, описание.
// В карточке продукта используем все вышесказанные свойства.
// В корзине: Basket {
//   product1 {
//     name: name_prodict1,
//     price: price_product1,
//     quantity: 1 - по умолчанию
//   }, productN {
//     name: name_prodictN,
//     price: price_productN,
//     quantity: 1 - по умолчанию
//   }
// }
// Метод посчёта общей стоимости корзины(price_product1 * quantity + price_productN * quantity)
