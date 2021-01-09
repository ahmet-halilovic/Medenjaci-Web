import {Order} from '../models/Order';
import {ChosenProduct} from '../models/ChosenProduct';
import {Product} from '../models/Product';

export const ORDERS: Order[] = [
    new Order(
      Math.floor(Math.random() * 1000),
      2997,
      [new ChosenProduct(
        new Product(
          1,
          'Livadski med',
          999,
          'https://lh3.googleusercontent.com/proxy/aMsZs3VzCUF2aK8_x9c77sFQ9dEtf7B50NYYsyzV9McT7n5RiKwblYTC8u641-0jKXKAo_GEjm80UvyiED2IyL4HtQaNN7yQsyAD6TZLox4MWfCOEH_HiAxHmYJg',
          'Domaci livadski med.',
          'Koristiti svako jutro uz caj.',
          'Med'
        ), 3
      )],
      'Na čekanju',
      new Date(),
      'Ahmet',
      'Halilović',
      'Zmaj Jovina 51',
      'Novi Pazar',
      '065 612 7222',
      'ahmet')
  ]
;
